import React from 'react';
import {connect} from 'react-redux';

export function Count(props) {
    return (
        <div className="correct-incorrect-counts">
            <p>Correct To Date: {props.correct}</p> 
            <p>Incorrect To Date: {props.incorrect}</p>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        correct: state.protectedData.data.correct,
        incorrect: state.protectedData.data.incorrect
    };
};

export default connect(mapStateToProps)(Count);
