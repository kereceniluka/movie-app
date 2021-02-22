import React from 'react';
import { useSelector } from 'react-redux';
import YouTube from 'react-youtube';

// components
import Banner from '../components/Banner';
import Cta from '../components/Cta';
import Row from '../components/Row';
import Modal from '../components/Modal';

const Home = () => {

    const { selectedMovie: { trailer } } = useSelector(state => state.trailerModal);

    const opts = {
        width: '100%',
        height: '600px',
        playerVars: {
            autoplay: 1,
        },
    }

    return (
        <>
            <Banner />
            <Cta />
            <Row title="Popular movies" type="movie" period="week" />
            <Row title="Popular TV shows" type="tv" period="week" />
            <Modal title="Wonder Woman">
               {trailer && <YouTube videoId={trailer} opts={opts} />}
            </Modal>
        </>
    )
}

export default Home;
