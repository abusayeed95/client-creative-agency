import React from 'react';
import './Login.css';
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebaseConfig';
import { UserContext } from '../../App';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [user, setUser] = React.useContext(UserContext);
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };


    const handleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, email, photoURL, uid } = result.user;
                setUser({ ...user, name: displayName, email, uid, photoURL });
                history.replace(from)
            })
            .catch(error => {
                console.log(error)
            });
    }
    return (
        <div className="login-page d-flex justify-content-center align-items-center">
            <div className="login-container d-flex flex-column align-items-center">
                <Link to="/home"> <img className="mb-5" height="47px" src={logo} alt="logo" /></Link>
                <div className="login-box">
                    <div className="login-info d-flex flex-column align-items-center">
                        <h3 className="mb-4">Login With</h3>
                        <button onClick={handleLogin} className="mb-3"><FontAwesomeIcon icon={faGoogle} /> Login With Google</button>
                        <p>Don't have an Account? <a href="#">Create a new account</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;