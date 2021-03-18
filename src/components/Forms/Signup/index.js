import { StyledSubmitBtn, StyledNavLink } from '../FormsStyle';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

// bootstrap
import { Card, Form, Alert } from 'react-bootstrap';

// actions
import { signup } from '../../../actions/auth';

const Signup = () => {

    const history = useHistory();

    const dispatch = useDispatch();
    const { error } = useSelector(state => state.auth);

    const { register, handleSubmit } = useForm();

    const onSubmit = ({ email, password, confirmPassword }) => {
        if(password === confirmPassword) {
            dispatch(signup(email, password));
            history.push('/');
        }
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
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
                        <Form.Group id="confirm-password">
                            <Form.Label htmlFor="confirm-password">Confirm Password</Form.Label>
                            <Form.Control type="password" name="confirmPassword" ref={register({ required: true })} />
                        </Form.Group>
                        <StyledSubmitBtn className="w-100" type="submit">Sign Up</StyledSubmitBtn>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <span>Already have an account? <StyledNavLink to="/login">Log In</StyledNavLink></span>
            </div>
        </>
    );
}

export default Signup;
