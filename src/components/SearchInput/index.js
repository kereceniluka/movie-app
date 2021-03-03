import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

// bootstrap
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

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
            <Row className="w-100">
                <Col style={{ padding: 0, textAlign: 'center' }}>
                    <h2 style={{ fontWeight: 'bold', fontSize: '41px', lineHeight: '49px', letterSpacing: '-0.6px', color: '#001217' }}>{placeholder}</h2>
                    <p style={{ marginTop: '15px', fontSize: '20px', lineHeight: '28px', color: '#667375' }}>Search for millions of movies, TV shows and people to discover.</p>
                </Col>
            </Row>
            <Row className="w-100">
                <Col style={{ padding: 0, marginTop: '40px' }}>
                    <Form className="d-flex align-items-center justify-content-center" onSubmit={handleSubmit(onSubmit)} inline>
                        <Form.Control placeholder={placeholder} name="searchedTerm" ref={register} style={{ width: '340px', height: '48px', margin: '0 10px', color: '#c4c4c4' }} />
                        <Button variant="primary" type="submit" style={{ width: '150px', height: '48px', backgroundColor: '#fca311', color: '#14213d', padding: '10px', borderRadius: '4px', borderColor: '#fca311', margin: '0 10px', fontWeight: 'bold', lineHeight: '28px' }}>Search</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default SearchInput;
