import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = () => {
    const [user, setUser] = React.useContext(UserContext);
    return (
        function PrivateRoute({ children, ...rest }) {
            return (
                <Route
                    {...rest}
                    render={({ location }) =>
                        user.uid ? (
                            children
                        ) : (
                                <Redirect
                                    to={{
                                        pathname: "/login",
                                        state: { from: location }
                                    }}
                                />
                            )
                    }
                />
            );
        }
    );
};

export default PrivateRoute;