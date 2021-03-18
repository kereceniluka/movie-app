// components
import Banner from '../components/Banner';
import Cta from '../components/Cta';
import PosterSection from '../components/PosterSection';

const Home = () => {
    return (
        <>
            <Banner />
            <Cta />
            <PosterSection title="Popular movies" type="movie" period="week" />
            <PosterSection title="Popular series" type="tv" period="week" bg="#f2f2f2" />
        </>
    )
}

export default Home;
