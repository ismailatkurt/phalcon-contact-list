import {connect} from "react-redux";
import Component from "./Component";
import {create} from "../../../Actions/ContactList/create";
import {edit} from "../../../Actions/ContactList/edit";
import {update} from "../../../Actions/ContactList/update";
import {save} from "../../../Actions/ContactList/save";

const mapStateToProps = (state, ownProps) => {
    return {
        ...state.ContactListReducer,
        ...state.AuthReducer
    };
};

const mapDispatchToProps = dispatch => {
    return {
        create: () => {
            dispatch(create());
        },
        edit: (id) => {
            dispatch(edit(id));
        },
        update: (id, data) => {
            dispatch(update(id, data));
        },
        save: (data) => {
            dispatch(save(data));
        },
    }
};

export const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
