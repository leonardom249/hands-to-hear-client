import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className="dashboard-name">Name: {this.props.name}</div>
                <div className="dashboard-protected-data">
                    Correct: {this.props.correct}
                    Incorrect: {this.props.incorrect}
                    Question: <img alt='sign to answer' src={this.props.question} />
                    Answer: {this.props.answer}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.fullName}`,
        correct: state.protectedData.data.correct,
        incorrect: state.protectedData.data.incorrect,
        question: state.protectedData.data.question,
        answer: state.protectedData.data.answer


    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
