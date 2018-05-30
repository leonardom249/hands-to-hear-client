import React from 'react';
import {connect} from 'react-redux'
import {answeredQuestion} from '../actions/protected-data';


export function SubmitAnswer(props){
    return(
        <div className="dashboard-user-answer">
                    <form className='user-answer'
                    onSubmit={e=>{
                        e.preventDefault();
                        console.log(e.target.userAnswer.value);
                        props.dispatch(answeredQuestion(e.target.userAnswer.value));
                        e.target.userAnswer.value=''
                        }
                      }
                    >
                        Your Answer: <input type='text' name='userAnswer'/>
                        <button type='submit'>Submit/Show Answer</button>
                    </form>
        </div>
    )
}


export default connect()(SubmitAnswer)