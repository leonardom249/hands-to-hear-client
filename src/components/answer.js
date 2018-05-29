import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';

export function Answer(props) {
    console.log(props)    
    return (
        <div className="dashboard-protected-data">
            Answer: {props.answer}
        </div>
    );
}

const mapStateToProps = state => {
    console.log('test', state.protectedData.data.answer)
    return {
        answer: state.protectedData.data.answer
    };
};

export default connect(mapStateToProps)(Answer);
