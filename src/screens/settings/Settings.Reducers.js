import { SETTINGS_INITIATED, SETTINGS_SUCCEED, SETTINGS_FAILED } from "./Settings.ActionTypes";

const initialState = {
    isFetching: false,
    settingsData: null,
    error: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SETTINGS_INITIATED: {
            return {
                ...state,
                isFetching: true,
            };
        }
        case SETTINGS_SUCCEED: {
            const { data } = action.payload;
            return {
                ...state,
                isFetching: false,
                settingsData: data,
            };
        }
        case SETTINGS_FAILED: {
            const { error } = action.payload;
            return {
                ...state,
                isFetching: false,
                error,
            };
        }
        default:
            return state;
    }
}
