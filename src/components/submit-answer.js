import React from 'react';
import {connect} from 'react-redux'
import {fetchAnswer} from '../actions/protected-data';


export function SubmitAnswer(props){

    return(
        <div className="dashboard-user-answer">
                    <form className='user-answer'
                    onSubmit={e=>{
                        e.preventDefault();
                            const userGuess=e.target.userAnswer.value.toLowerCase().trim();
                            props.dispatch(fetchAnswer(userGuess));
                            e.target.userAnswer.value='';
                      }
                    }
                    >
                        Your Answer: <input type='text' name='userAnswer'/>
                        <button type='submit'>Submit/Show Answer</button>
                    </form>
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