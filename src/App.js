import React from 'react';
import { Route } from 'react-router-dom';

// components
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// pages
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <Navigation />
      <main>
        <Route exact path="/" component={Home} />
      </main>
      <Footer />
    </>
  );
}

export default App;
