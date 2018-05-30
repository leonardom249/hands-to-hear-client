import React from 'react';
import {connect} from 'react-redux'
import {next, postForNextQuestion} from '../actions/protected-data';


export function Next(props){
    return(
        <div className='next-button'> 
                        <button type='submit'
                        onClick={()=>{
                            props.dispatch(postForNextQuestion(props.userGuess));
                            props.dispatch(next());
                        }
                    }
                    >Next</button>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        correct: state.protectedData.data.correct,
        incorrect: state.protectedData.data.incorrect,
        userGuess: state.protectedData.userAnswer
    };
};

export default connect(mapStateToProps)(Next)