import {connect} from "react-redux";
import Header from "./Header";
import store from "../../../store";
import {logoutUser} from "../../../Actions/Auth/logoutUser";

const mapStateToProps = (state, ownProps) => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        logoutUser() {
            store.dispatch(logoutUser());
        }
    }
};

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderContainer