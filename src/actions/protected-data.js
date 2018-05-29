import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchProtectedDataSuccess = (correct, incorrect, question, answer, next) => ({
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

export const fetchProtectedData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/protected`, {
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
            const question= data.questions.question.img;
            const answer= data.questions.question.answer;
            const next= data.questions.next.next.value.img;
            return dispatch(fetchProtectedDataSuccess(correct, incorrect, question, answer, next))})
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};
