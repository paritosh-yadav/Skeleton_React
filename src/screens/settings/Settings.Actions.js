import { SETTINGS_INITIATED, SETTINGS_SUCCEED, SETTINGS_FAILED } from "./Settings.ActionTypes";
import { initiateAPICall } from "../../utils/NetworkAdapter";
export const initiateSettings = () => ({
    type: SETTINGS_INITIATED,
});
export const settingsSucceed = data => ({
    type: SETTINGS_SUCCEED,
    payload: {
        data,
    }
});
export const settingsFailed = (error) => ({
    type: SETTINGS_FAILED,
    payload: {
        error,
    }
});

export const fetchSettings = (endpoint) => {
    return function (dispatch) {
        dispatch(initiateSettings());
        return initiateAPICall(endpoint).then(
            (response) => dispatch(settingsSucceed(response.data)),
            (error) => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log("Error", error.message);
                }
                console.log(error.config);
                return dispatch(settingsFailed(error.response.data));
            },
        );
    };
};
