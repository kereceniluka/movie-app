import React from 'react';
import { useSelector } from 'react-redux';
import YouTube from 'react-youtube';

// components
import Banner from '../components/Banner';
import Cta from '../components/Cta';
import PosterSection from '../components/PosterSection';
import Modal from '../components/Modal';

const Home = () => {

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
            <Banner />
            <Cta />
            <PosterSection title="Popular movies" type="movie" period="week" />
            <PosterSection title="Popular series" type="tv" period="week" bg="#f2f2f2" />
            <Modal title="Wonder Woman">
               {trailer && <YouTube videoId={trailer} opts={opts} />}
            </Modal>
        </>
    )
}

export default Home;
