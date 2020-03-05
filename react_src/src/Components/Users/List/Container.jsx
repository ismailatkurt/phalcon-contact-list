import {connect} from "react-redux";
import {all} from "../../../Actions/User/all";
import Component from "./Component";

const mapStateToProps = (state, ownProps) => {
    return {
        ...state.UserReducer,
        ...state.AuthReducer
    };
};

const mapDispatchToProps = dispatch => {
    return {
        all: (page, limit, searchTerm) => {
            dispatch(
                all(page, limit, searchTerm)
            );
        }
    }
};

export const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
