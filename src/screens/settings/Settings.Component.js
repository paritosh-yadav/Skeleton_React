import React from 'react'
import PropTypes from 'prop-types'
const API_ENDPOINT = "ed3j0";
const SettingsComponent = ({ fetchSettings, settingsReducer }) => {
    let { settingsData } = settingsReducer;
    return (
        <div>
            <p>{settingsData ? `${settingsData.name} ${settingsData.age}` : 'Click to initiate settings'}</p>
            <button onClick={() => fetchSettings(API_ENDPOINT)}>fetchSettings</button>
        </div>
    )
}
SettingsComponent.propTypes = {
    settingsReducer: PropTypes.object.isRequired,
    fetchSettings: PropTypes.func.isRequired
}

export default SettingsComponent;
