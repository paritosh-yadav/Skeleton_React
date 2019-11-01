import React from 'react'
import PropTypes from 'prop-types'

const SettingsComponent = ({ initiateSettings, settingsReducer }) => {
    let { settingsData } = settingsReducer;
    return (
        <div>
            <p>{settingsData ? settingsData : 'Click to initiate settings'}</p>
            <button onClick={() => initiateSettings("initiated")}>initiateSettings</button>
        </div>
    )
}
SettingsComponent.propTypes = {
    settingsReducer: PropTypes.object.isRequired,
    initiateSettings: PropTypes.func.isRequired
}

export default SettingsComponent;
