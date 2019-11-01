import axios from "axios";

export const initiateAPICall = (endpoint) => {
    return axios.get(`https://api.myjson.com/bins/${endpoint}`);
}