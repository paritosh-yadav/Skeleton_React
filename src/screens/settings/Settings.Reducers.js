import { SETTINGS_INITIATED } from "./Settings.ActionTypes";

const initialState = {
    settingsData: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SETTINGS_INITIATED: {
            const { data } = action.payload;
            return {
                ...state,
                settingsData: data,
            };
        }
        default:
            return state;
    }
}
