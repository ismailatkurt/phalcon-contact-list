import {connect} from "react-redux";
import store from "../../../store";
import Management from "./Management";
import {ManagementVisited} from "../../../Actions/Management/ManagementVisited";

const mapStateToProps = (state, ownProps) => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        managementVisited() {
            store.dispatch(ManagementVisited());
        }
    }
};

const ManagementContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Management);

export default ManagementContainer