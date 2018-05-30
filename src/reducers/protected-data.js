import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR,
    ANSWERED_QUESTION,
    NEXT,
    BACK_TO_MAIN,
    TO_INSTRUCTIONS
} from '../actions/protected-data';

const initialState = {
    data: {},
    error: null,
    answered: false,
    userAnswer:'',
    answer:'',
    instructions: false
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
        return Object.assign({}, state, {
            data:{ 
                correct: action.correct,
                incorrect: action.incorrect,
                question: action.question,
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
            answered: true,
            userAnswer: action.userAnswer,
            answer: action.answer
        }); 
    }
    else if (action.type === NEXT) {
        return Object.assign({}, state, {
            answered: false,
            userAnswer:'',
            answer:''
        }); 
    }
    else if (action.type === BACK_TO_MAIN) {
        return Object.assign({}, state, {
            instructions: false
        }); 
    }
    else if (action.type === TO_INSTRUCTIONS) {
        return Object.assign({}, state, {
            instructions: true
        }); 
    }
    return state;
}
