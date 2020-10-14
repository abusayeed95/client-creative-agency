import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import './NavigationBar.css';

const NavigationBar = () => {
    const history = useHistory();
    return (
        <Navbar className="mx-5 px-5 navigation-bar" variant="light">
            <Navbar.Brand><Link to="/home"><img height="47px" src={logo} alt="logo" /></Link></Navbar.Brand>
            <Nav className="ml-auto">
                <Link className="nav-link" to="/home">Home</Link>
                <Link className="nav-link" to="/portfolio">Our Portfolio</Link>
                <Link className="nav-link" to="/team">Our Team</Link>
                <Link className="nav-link" to="/contact">Contact Us</Link>
                <button onClick={() => history.push('/login')} class="brand-btn">Login</button>
            </Nav>
        </Navbar>
    );
};

export default NavigationBar;