import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IconContext } from 'react-icons';
import { FaCheckCircle, FaRegCheckCircle } from 'react-icons/fa';

// bootstrap
import { Accordion, Card, Image } from 'react-bootstrap';

// assets
import noImagePlaceholder from '../../assets/images/no-image-placeholder.svg'; 

// actions
import { fetchAllSeasons } from '../../actions/details';

const Seasons = ({ id, numberOfSeasons }) => {

    const dispatch = useDispatch();
    const { loading, data } = useSelector(state => state.allTVShowSeasons);

    useEffect(() => {
        dispatch(fetchAllSeasons(id, numberOfSeasons));
    }, []);

    return (
        <Accordion className="my-5" defaultActiveKey="0">
            {loading === false && (
                data.map(({ id, name, episodes }, index) => (
                    <Card key={id}>
                        <Accordion.Toggle as={Card.Header} eventKey={`${index}`} style={{ color: '#001217', letterSpacing: '-0.3px', fontSize: '22px', fontWeight: 'bold' }}>{name}</Accordion.Toggle>
                        <Accordion.Collapse eventKey={`${index}`}>
                            <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
                                {episodes.map(({ season_number, id, episode_number, name, still_path }) => (
                                    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#eee', width: '100%', height: '80px', margin: '6px 0', borderRadius: '6px', overflow: 'hidden' }} key={id}>
                                        <Image src={still_path ? `${process.env.REACT_APP_TMDB_IMAGES_URL}${still_path}` : noImagePlaceholder} alt={name} style={{ width: '100px', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                                        <span style={{ padding: '0 20px', color: '#001217', letterSpacing: '-0.3px', fontSize: '18px' }} >{`S${season_number}E${episode_number} | ${name}`}</span>
                                        <IconContext.Provider value={{ color: '#fca311', size: '28px' }}>
                                            {/* <FaRegCheckCircle style={{ margin: '0 20px 0 auto' }} /> */}
                                            <FaCheckCircle style={{ margin: '0 20px 0 auto' }} />
                                        </IconContext.Provider>
                                    </div>
                                ))}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                ))
            )}
        </Accordion>
    );
}

export default Seasons;
