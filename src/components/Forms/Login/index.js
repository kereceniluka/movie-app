import React from 'react';
import { StyledSubmitBtn, StyledNavLink } from '../FormsStyle';
import { useHistory, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

// bootstrap
import { Card, Form, Alert } from 'react-bootstrap';

// actions
import { login } from '../../../actions/auth';

const Login = () => {

    const history = useHistory();

    const dispatch = useDispatch();
    const { error } = useSelector(state => state.auth);

    const { register, handleSubmit } = useForm();

    const onSubmit = ({ email, password }) => {
        dispatch(login(email, password));
        history.push('/');
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    {error && (
                        <Alert variant="danger">{error?.message}</Alert>
                    )}
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group id="email">
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control type="email" name="email" ref={register({ required: true })} />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label htmlFor="password">Password</Form.Label>
                            <Form.Control type="password" name="password" ref={register({ required: true })} />
                        </Form.Group>
                        <StyledSubmitBtn className="w-100" type="submit">Log In</StyledSubmitBtn>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <span>Need an account? <StyledNavLink to="/signup">Sign Up</StyledNavLink></span>
            </div>
        </>
    );
}

export default Login;
