import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';

const NavigationBar = () => {
    return (
        <Navbar className="mx-5 px-5" variant="light">
            <Navbar.Brand><Link to="/home"><img height="47px" src={logo} alt="logo" /></Link></Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="#home"><Link to="/login">Login</Link></Nav.Link>
                <Nav.Link href="#features"><Link to="/dashboard">Dashboard</Link></Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default NavigationBar;