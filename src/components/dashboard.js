import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import Answer  from './answer';
import  Next  from './next-button';
import SubmitAnswer from './submit-answer'

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        if(this.props.answered===true){
            return (
                <div className="dashboard">
                    <div className="dashboard-question">
                        <img alt='sign to answer' src={this.props.question} />
                    </div>
                    <div className='dashboard-ask'>
                        <h3>What does this sign translate to in written English?</h3>
                        <p>Correct To Date: {this.props.correct}</p>
                        <p>Incorrect To Date: {this.props.incorrect}</p>

                        <Next/>
                    </div>
                    <Answer/>
                </div>
            )
        }
        else{
            return (
            <div className="dashboard">
                <div className="dashboard-question">
                    <img alt='sign to answer' src={this.props.question} />
                </div>
                <div className='dashboard-ask'>
                    <h3>What does this sign translate to in written English?</h3>
                    <p>Correct To Date: {this.props.correct}</p>
                    <p>Incorrect To Date: {this.props.incorrect}</p>
                </div>
                <SubmitAnswer/>
            </div>
        
        );
    }
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
        answered: state.protectedData.answered


    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
