import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import { toInstructions } from '../actions/protected-data';

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()}>Log out</button>
            );
        }

        let instructionButton;
        if (this.props.instructions===false && this.props.loggedIn) {
            instructionButton = (
                <button onClick={() => this.props.dispatch(toInstructions())}>Instructions</button>
            );
        }

        return (
            <div className="header-bar">
                <h1>Hands to Hear</h1>
                <p>A place to learn basic sign language...because 
                    everyone needs to be heard especially when we 
                    can't hear them
                </p>
                {instructionButton}
                {logOutButton}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    instructions: state.protectedData.instructions
});

export default connect(mapStateToProps)(HeaderBar);
