import {connect} from "react-redux";
import {all} from "../../../Actions/ContactList/all";
import Component from "./Component";

const mapStateToProps = (state, ownProps) => {
    return {
        ...state.ContactListReducer,
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
