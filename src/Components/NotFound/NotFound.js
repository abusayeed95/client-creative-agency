import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    document.title = 'Not Found||Creative Agency'
    return (
        <div style={{ height: '100vh' }} className="d-flex flex-column align-items-center justify-content-center ">
            <h1 className="text-danger">404: Not Found</h1>
            <Link to="/home">Home</Link>
        </div>
    );
};

export default NotFound;