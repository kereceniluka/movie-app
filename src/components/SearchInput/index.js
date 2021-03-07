import React from 'react';
import { StyledSearchInputParagraph, StyledSearchInputField, StyledSubmitBtn } from './SearchInputStyle';
import { StyledLargeTitle } from '../../theme/StyledElements';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

// bootstrap
import { Container, Row, Col, Form } from 'react-bootstrap';

// actions
import { searchMovie, searchTVShow } from '../../actions/search';

const SearchInput = ({ placeholder, type }) => {

    const dispatch = useDispatch();

    const { register, handleSubmit, setValue, errors } = useForm();

    const onSubmit = ({ searchedTerm }) => {
        if(searchedTerm !== '') {
            type === 'movie' ? dispatch(searchMovie(searchedTerm)) : dispatch(searchTVShow(searchedTerm));        
        }

        setValue('');
    }

    return (
        <Container className="d-flex flex-column align-items-center" style={{ padding: '60px 0 100px 0' }}>
            <Row>
                <Col style={{ padding: 0 }}>
                    <StyledLargeTitle className="text-center">{placeholder}</StyledLargeTitle>
                    <StyledSearchInputParagraph>Search for millions of movies, TV shows and people to discover.</StyledSearchInputParagraph>
                </Col>
            </Row>
            <Row className="w-100">
                <Col style={{ padding: 0, marginTop: '40px' }}>
                    <Form className="d-flex align-items-center justify-content-center" onSubmit={handleSubmit(onSubmit)} inline>
                        <StyledSearchInputField placeholder={placeholder} name="searchedTerm" ref={register} />
                        <StyledSubmitBtn variant="primary" type="submit">Search</StyledSubmitBtn>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default SearchInput;
