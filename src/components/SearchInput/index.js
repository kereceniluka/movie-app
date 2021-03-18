import {
    StyledContainer, 
    StyledSearchInputParagraph, 
    StyledSearchInputField, 
    StyledSubmitBtn
} from './SearchInputStyle';
import { StyledLargeTitle } from '../../theme/StyledElements';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

// bootstrap
import { Row, Col, Form } from 'react-bootstrap';

// actions
import { searchMovie, searchTVShow } from '../../actions/search';

const SearchInput = ({ placeholder, type }) => {

    const dispatch = useDispatch();

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = ({ searchedTerm }) => {
        if(searchedTerm !== '') {
            type === 'movie' ? dispatch(searchMovie(searchedTerm)) : dispatch(searchTVShow(searchedTerm));        
        }
    }

    return (
        <StyledContainer className="d-flex flex-column align-items-center">
            <Row>
                <Col className="p-0">
                    <StyledLargeTitle className="text-center">{placeholder}</StyledLargeTitle>
                    <StyledSearchInputParagraph>Search for millions of movies, TV shows and people to discover.</StyledSearchInputParagraph>
                </Col>
            </Row>
            <Row className="w-100">
                <Col className="p-0 mt-4">
                    <Form className="d-flex align-items-center justify-content-center" onSubmit={handleSubmit(onSubmit)} inline>
                        <StyledSearchInputField placeholder={placeholder} name="searchedTerm" ref={register} />
                        <StyledSubmitBtn variant="primary" type="submit">Search</StyledSubmitBtn>
                    </Form>
                </Col>
            </Row>
        </StyledContainer>
    );
}

export default SearchInput;
