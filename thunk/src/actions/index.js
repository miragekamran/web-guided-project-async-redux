import axios from "axios";

export const GET_PERSON = "GET_PERSON";
export const GET_PERSON_SUCCESS = "GET_PERSON_SUCCESS";
export const GET_PERSON_ERROR = "GET_PERSON_ERROR";
export const SET_IS_FETCHING = "SET_IS_FETCHING";

export const getPerson = () => dispatch => {
    dispatch(setIsFetching(true));
    axios.get("https://randomuser.me/api/").then((res) => {
        console.log(res);
        dispatch(setIsFetching(false));
    }, (error) => {

    });
    return { type: GET_PERSON, payload: { data: "hello" } };
};

const setIsFetching = (isFetching) => {
    return {type: SET_IS_FETCHING, payload: isFetching}
}

const getPersonSuccess = (person) => {
    
}
