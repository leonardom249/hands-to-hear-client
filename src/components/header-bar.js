import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import { toInstructions } from '../actions/protected-data';

import './header-bar.css';

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
                <button className="logout-button"
                  onClick={() => this.logOut()}>LOG OUT</button>
            );
        }

        let instructionButton;
        if (this.props.instructions===false && this.props.loggedIn) {
            instructionButton = (
                <button className="instruction-button"
                  onClick={() => this.props.dispatch(toInstructions())}>Instructions</button>
            );
        }

        return (
            <div className="header-bar">
                {logOutButton}
                <h1>Hands to Hear</h1>
                {instructionButton}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    instructions: state.protectedData.instructions
});

export default connect(mapStateToProps)(HeaderBar);
