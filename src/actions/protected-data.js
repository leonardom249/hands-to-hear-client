import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchProtectedDataSuccess = (correct, incorrect, question, answer) => ({
    type: FETCH_PROTECTED_DATA_SUCCESS,
    correct,
    incorrect,
    question,
    answer
});

export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchProtectedDataError = error => ({
    type: FETCH_PROTECTED_DATA_ERROR,
    error
});

export const ANSWERED_QUESTION = 'ANSWERED_QUESTION';
export const answeredQuestion = (userAnswer, correct, incorrect)=>({
    type: ANSWERED_QUESTION,
    userAnswer,
    correct,
    incorrect
});

export const NEXT = 'NEXT';
export const next = ()=>({
    type: NEXT
});

export const fetchProtectedData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/questions`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => {
            const correct=data.correct;
            const incorrect=data.incorrect;
            const question= data.questionHead.img;
            const answer= data.questionHead.answer;
            return dispatch(fetchProtectedDataSuccess(correct, incorrect, question, answer))})
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};

export const postForNextQuestion = (correct, incorrect) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/questions`, {
        method: 'POST',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify({
           correct,
           incorrect
        })
        //NOTE FOR START OF DAY: doesn't look like it is properly sending over the correct
        // and incorrect on the body since req.body on server is coming up as an empty obj
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => {
            console.log('new data', data)
            const correct=data.correct;
            const incorrect=data.incorrect;
            const question= data.questionHead.img;
            const answer= data.questionHead.answer;
            return dispatch(fetchProtectedDataSuccess(correct, incorrect, question, answer))})
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};

