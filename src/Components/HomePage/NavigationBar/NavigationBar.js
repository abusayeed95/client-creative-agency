import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../assets/logo.png';
import './NavigationBar.css';

const NavigationBar = () => {
    const [user, setUser] = React.useContext(UserContext);
    const history = useHistory();
    return (
        <Navbar className="mx-md-5 px-md-5 navigation-bar" expand="lg" variant="light">
            <Navbar.Brand><Link to="/home"><img height="47px" src={logo} alt="logo" /></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="my-nav" />
            <Navbar.Collapse id="my-nav">
                <Nav className=" ml-lg-auto">
                    <Link className="nav-link" to="/home">Home</Link>
                    <Link className="nav-link" to="/portfolio">Our Portfolio</Link>
                    <Link className="nav-link" to="/team">Our Team</Link>
                    <Link className="nav-link" to="/contact">Contact Us</Link>
                    {
                        user.uid ?
                            <button className="brand-btn" onClick={() => history.push('/dashboard')}>Dashboard</button>
                            : <button onClick={() => history.push('/login')} class="brand-btn">Login</button>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;