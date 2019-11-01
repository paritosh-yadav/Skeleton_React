import { connect } from "react-redux";
import { fetchSettings } from "./Settings.Actions";
import SettingsComponent from "./Settings.Component";

const mapStateToProps = state => {
    return { settingsReducer: state.settingsReducer };
};
// export default SettingsContainer;
export default connect(
    mapStateToProps,
    { fetchSettings }
)(SettingsComponent);
