import axios from "axios";

export const initiateAPICall = (endpoint) => {
    return axios.get(`${process.env.REACT_APP_API_URL}${endpoint}`);
}