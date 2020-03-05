import {connect} from "react-redux";
import Sidebar from "./Sidebar";
import {withRouter} from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {}
};

const SidebarContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar));

export default SidebarContainer