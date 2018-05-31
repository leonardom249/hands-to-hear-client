import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';
import './landing-page.css';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div>
            <p>A place to learn basic sign language...</p>
            <p>because everyone needs to be heard.</p>
            <div className="home">
                <div className="overlay"></div>
                <div className="overlay2"></div>
                <h2>Welcome Back to Hands to Hear!</h2>
                {/* <h3>Please Login to Continue Your Learning Experience.</h3> */}
                <LoginForm />
            </div>
            <Link to="/register">New to Hands to Hear? Click to create an account</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
