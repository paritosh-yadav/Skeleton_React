import { SETTINGS_INITIATED } from "./Settings.ActionTypes";

export const initiateSettings = data => ({
    type: SETTINGS_INITIATED,
    payload: {
        data,
    }
});
