import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import  Next  from './next-button';
import SubmitAnswer from './submit-answer'
import Count from './count'
import Instructions from './instructions'

import './dashboard.css';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        if(this.props.instructions===true){
            return(
                <Instructions />
            )
        }
        else{
            if(this.props.answered===true){
                return (
                    <div className="dashboard">
                    <div className="question-box">
                        <div className="dashboard-question">
                            <img alt='sign to answer' src={this.props.question} />
                        </div>
                        <div className='dashboard-ask'>
                            <h3>Correct Answer:</h3>
                            "{this.props.answer}"
                            <Next/>
                        </div>
                        </div>
                    </div>
                )
            }
            else{
                return (
                <div className="dashboard">
                    <div className="question-box">
                        <div className="dashboard-question">
                            <h3>What Letter is this?</h3>
                            <img alt='sign to answer' src={this.props.question} />
                        </div>
                        <div className='dashboard-ask'>
                            <SubmitAnswer/>
                        </div>
                    </div>
                    <Count/>

                </div>
            
            );
          }
        }
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.fullName}`,
        question: state.protectedData.data.question,
        answered: state.protectedData.answered,
        answer: state.protectedData.answer,
        instructions: state.protectedData.instructions
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
