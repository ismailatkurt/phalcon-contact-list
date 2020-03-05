import {connect} from "react-redux";
import Login from "./Login";
import {loginUser} from "../../../Actions/Auth/loginUser";
import {loginScreenDisplayed} from "../../../Actions/Auth/loginScreenDisplayed";

const mapStateToProps = (state, ownProps) => {
    return {
        ...state.AuthReducer
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loginUser: (username, password) => {
            dispatch(
                loginUser(username, password)
            );
        },
        loginScreenDisplayed: () => {
            dispatch(
                loginScreenDisplayed()
            );
        }
    }
};

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

export default LoginContainer