import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchProtectedDataSuccess = (correct, incorrect, question) => ({
    type: FETCH_PROTECTED_DATA_SUCCESS,
    correct,
    incorrect,
    question
});

export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchProtectedDataError = error => ({
    type: FETCH_PROTECTED_DATA_ERROR,
    error
});

export const ANSWERED_QUESTION = 'ANSWERED_QUESTION';
export const answeredQuestion = (userAnswer, answer)=>({
    type: ANSWERED_QUESTION,
    userAnswer,
    answer
});

export const NEXT = 'NEXT';
export const next = ()=>({
    type: NEXT
});

export const TO_INSTRUCTIONS = 'TO_INSTRUCTIONS';
export const toInstructions = ()=>({
    type: TO_INSTRUCTIONS
});

export const BACK_TO_MAIN = 'BACK_TO_MAIN';
export const backToMain = ()=>({
    type: BACK_TO_MAIN
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
            return dispatch(fetchProtectedDataSuccess(correct, incorrect, question))})
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};

export const postForNextQuestion = (userGuess) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/questions`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify({
           answer: userGuess
        })
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => {
            const correct=data.correct;
            const incorrect=data.incorrect;
            const question= data.questionHead.img;
            return dispatch(fetchProtectedDataSuccess(correct, incorrect, question))})
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};

export const fetchAnswer = (userGuess) => (dispatch, getState) => {
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
            const answer= data.questionHead.answer;
            return dispatch(answeredQuestion(userGuess, answer))})
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};
