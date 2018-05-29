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
export const answeredQuestion = ()=>({
    type: ANSWERED_QUESTION
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
            console.log(data);
            const correct=data.correct;
            const incorrect=data.incorrect;
            const question= data.questionHead.img;
            const answer= data.questionHead.answer;
            // const next= data.questionNext.next.value.img;
            return dispatch(fetchProtectedDataSuccess(correct, incorrect, question, answer))})
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};


