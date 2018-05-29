import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR,
    ANSWERED_QUESTION
} from '../actions/protected-data';

const initialState = {
    data: {},
    error: null,
    answered: false
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
        return Object.assign({}, state, {
            data:{ 
                correct: action.correct,
                incorrect: action.incorrect,
                question: action.question,
                answer: action.answer
            },
            error: null
        });
    } 
    else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    else if (action.type === ANSWERED_QUESTION) {
        return Object.assign({}, state, {
            answered: true
        });
    }
    return state;
}
