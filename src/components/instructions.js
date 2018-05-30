import React from 'react';
import {connect} from 'react-redux';
import {backToMain} from '../actions/protected-data';


export function Instructions(props) {
    return (
        <div className="instructions">
            <h2>Instructions:</h2>
            <ul className='instructionlist'>
                <li><strong>Upon Login: </strong>the page will display your first question/the question where you last left off</li>
                <li><strong>Don't Know An Answer? </strong>Click "Submit/Show Answer" for the answer to appear as well as the "Next" button to your next question</li>
                <li><strong>If Your Answer Is Correct: </strong> Your correct score will go up</li>
                <li><strong>If Your Answer Is Incorrect/You Don't Know It: </strong> Your incorrect score will go up</li>
                <li><strong>To Save Your Progress: </strong> Simply hit the logout button and your progress will be saved</li>
            </ul>
            <p><em>Thank you for using "Hands to Hear".  We hope you enjoy learning ASL(American Sign Language) and continue your learning experience so everyone can be heard!</em></p>
            <button type='submit'
                        onClick={()=>{
                            props.dispatch(backToMain());
                        }
                    }
                    >Back To Main Page</button>
        </div>
    );
}

export default connect()(Instructions);
