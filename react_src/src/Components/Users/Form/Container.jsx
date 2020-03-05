import {connect} from "react-redux";
import Component from "./Component";
import {create} from "../../../Actions/User/create";
import {edit} from "../../../Actions/User/edit";
import {update} from "../../../Actions/User/update";
import {save} from "../../../Actions/User/save";

const mapStateToProps = (state, ownProps) => {
    return {
        ...state.UserReducer,
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
