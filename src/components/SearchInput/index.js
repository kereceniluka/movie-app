import { useState, useEffect, useRef } from 'react';
import {
    StyledContainer, 
    StyledSearchInputParagraph,
} from './SearchInputStyle';
import { StyledLargeTitle } from '../../theme/StyledElements';
import { useDispatch } from 'react-redux';
import { IconContext } from 'react-icons';
import { FaAngleDown } from 'react-icons/fa';

// bootstrap
import { Row, Col, InputGroup, FormControl, Dropdown } from 'react-bootstrap';

// actions
import { searchMovie, searchTVShow } from '../../actions/search';

const SearchInput = () => {

    const dispatch = useDispatch();

    const [type, setType] = useState('');
    const [enteredValue, setEnteredValue] = useState('');
    const inputRef = useRef();

    useEffect(() => {
        const timer = setTimeout(() => {
            if(enteredValue === inputRef.current.value && type) {
                type === 'movie' ? dispatch(searchMovie(inputRef.current.value)) : dispatch(searchTVShow(inputRef.current.value));
            }
        }, 500);

        return () => {
            clearTimeout(timer);
        }
    }, [enteredValue, inputRef, type]);

    return (
        <StyledContainer className="d-flex flex-column align-items-center">
            <Row>
                <Col className="p-0">
                    <StyledLargeTitle className="text-center">What are you interested in?</StyledLargeTitle>
                    <StyledSearchInputParagraph>Search for millions of movies, TV shows and people to discover.</StyledSearchInputParagraph>
                </Col>
            </Row>
            <Row className="w-100">
                <Col className="p-0 mt-4">
                    <InputGroup className="w-50 mx-auto">
                        <FormControl
                            className="p-4"
                            placeholder="Search..."
                            ref={inputRef}
                            onChange={({ target }) => setEnteredValue(target.value)}
                        />
                        <Dropdown as={InputGroup.Append} variant="primary" onSelect={(e) => setType(e)}>
                            <Dropdown.Toggle style={{ width: '100px', backgroundColor: '#fca311', borderColor: '#fca311', fontWeight: 700, color: '#14213d' }} id="search-filter">
                                {type === 'movie' ? 'Movie' : type === 'tv' ? 'TV Show' : 'Type'}
                                <IconContext.Provider value={{ size: '16px', color: '#14213d' }}>
                                    <FaAngleDown className="ml-1" />
                                </IconContext.Provider>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item eventKey="movie">Movie</Dropdown.Item>
                                <Dropdown.Item eventKey="tv">TV Show</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </InputGroup>
                </Col>
            </Row>
        </StyledContainer>
    );
}

export default SearchInput;
