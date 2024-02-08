import React from 'react';
import './Customer.css'

const CustomerClick = () => {
    return (
        <>
            {/* Include Navbar component here */}
            <br /><br />
            <div className="jumbotron text-center" style={{ marginBottom: '0px' }}>
                <h1 className="display-4">Hello, Customer</h1>
                <p className="lead">Welcome to Insurance Management System</p>
                <hr className="my-4" />
                <p></p>
                <p className="lead">
                    <a className="btn btn-danger btn-lg" href="customersignup" role="button">Create Your Account</a>
                    <a className="btn btn-success btn-lg" href="customerlogin" role="button">Login</a>
                </p>
                <br /><br /><br />
            </div>
            {/* Include Footer component here */}
        </>
    );
};

export default CustomerClick;
