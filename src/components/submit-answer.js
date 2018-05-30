import React from 'react';
import {connect} from 'react-redux'
import {answeredQuestion} from '../actions/protected-data';


export function SubmitAnswer(props){
    console.log(props.correct);

    return(
        <div className="dashboard-user-answer">
                    <form className='user-answer'
                    onSubmit={e=>{
                        e.preventDefault();
                        const userGuess=e.target.userAnswer.value.toLowerCase();
                        const answerMatch=props.answer.toLowerCase();
                        if(answerMatch===userGuess){
                            props.dispatch(answeredQuestion(userGuess, props.correct+1, props.incorrect));
                            //maybe need parseInt for props.correct+1?
                            e.target.userAnswer.value='';
                            console.log(props.correct);

                        }
                        else if(answerMatch!== userGuess){
                            props.dispatch(answeredQuestion(userGuess, props.correct, props.incorrect+1));
                            //maybe need parseInt for props.incorrect+1?
                            e.target.userAnswer.value=''
                        }
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