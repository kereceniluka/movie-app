import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {

    const { uid } = useSelector(state => state.firebase.auth);

    return (
        <Route
            {...rest}
            render={props => {
                return uid ? <Component {...props} /> : <Redirect to="/login" />
            }}    
        />
    );
}

export default PrivateRoute;
