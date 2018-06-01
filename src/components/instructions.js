import React from 'react';
import {connect} from 'react-redux';
import {backToMain} from '../actions/protected-data';

import './instructions.css';

export function Instructions(props) {
    return (
        <div>
            <div className="instructions">
                <ul className='instructionlist'>
                    <li>Upon Login <br /> The page will display your first question or, for existing users, the question where you last left off. </li> <br />
                    <li>Don't Know An Answer? <br /> Click "Submit Answer" for the answer to appear as well as the "Next" button to your next question.</li> <br />
                    <li>If Your Answer Is Correct <br />  Your correct score will go up.</li> <br />
                    <li>If Your Answer Is Incorrect <br /> Your incorrect score will go up.</li> <br />
                    <li>Your Progress Will Automatically Be Saved</li> <br />
                </ul>
                <p><em>Thank you for using "Hands to Hear". We hope you enjoy learning ASL (American Sign Language) and continue your learning experience so everyone can be heard!</em></p> <br /> 
            </div>
            <button className="instructions-button"
                type='submit'
                onClick={()=>{
                    props.dispatch(backToMain());
                }
                }
                >Back
            </button>
     </div>
    );
}

export default connect()(Instructions);
