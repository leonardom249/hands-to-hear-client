import React from 'react';
import {connect} from 'react-redux';

export function Answer(props) {
    return (
        <div className="dashboard-protected-data">
            Answer: {props.answer}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        answer: state.protectedData.data.answer
    };
};

export default connect(mapStateToProps)(Answer);
