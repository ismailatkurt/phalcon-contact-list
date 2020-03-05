import {DASHBOARD_VISITED} from "../Helpers/Constants";

const initialState = {};

export default function DashboardReducer(state, action) {
    switch (action.type) {
        case DASHBOARD_VISITED:
            return Object.assign({}, initialState, state);
        default:
            return Object.assign({}, initialState, state);
    }
}
