import React from 'react';
import {connect} from 'react-redux'
import {fetchAnswer} from '../actions/protected-data';

import './submit-answer.css';

export function SubmitAnswer(props){

    return(
        <div className="dashboard-user-answer">
            <div className="answer-container">
                <form 
                    className='user-answer'
                    onSubmit={e=>{
                        e.preventDefault();
                        const userGuess=e.target.userAnswer.value.toLowerCase().trim();
                        props.dispatch(fetchAnswer(userGuess));
                        e.target.userAnswer.value='';
                        } 
                    }>
                    Your Answer: <br />
                    <input className="user-answer-input" type='text' name='userAnswer'/> <br />
                    <button className="submit-answer-button"
                        type='submit'>Submit
                    </button>
                </form>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        answer: state.protectedData.data.answer,
        correct: state.protectedData.data.correct,
        incorrect: state.protectedData.data.incorrect
    };
};

export default connect(mapStateToProps)(SubmitAnswer)