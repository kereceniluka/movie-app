import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import YouTube from 'react-youtube';

// bootstrap
import { Container } from 'react-bootstrap';

// components
import Navigation from './components/Navigation';
import Modal from './components/Modal';
import Footer from './components/Footer';
import Login from './components/Forms/Login';
import Signup from './components/Forms/Signup';

// pages
import Home from './pages/Home';
import Movies from './pages/Movies';
import TVShows from './pages/TVShows';
import Details from './pages/Details';

const App = () => {

  const { selectedMovie: { trailer } } = useSelector(state => state.trailerModal);

  const opts = {
    width: '100%',
    height: '600px',
    playerVars: {
        autoplay: 0,
    },
  }

  return (
    <>
      <Modal>
        {trailer && <YouTube videoId={trailer} opts={opts} />}
      </Modal>
      <Navigation />
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/tvshows" component={TVShows} />
        <Route path="/details" component={Details} />
        <Container style={{ maxWidth: '500px' }}>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
