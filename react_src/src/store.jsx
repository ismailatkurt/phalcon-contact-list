import {applyMiddleware, combineReducers, createStore} from "redux";
import * as browserHistory from "react-router-redux";
import {routerMiddleware} from "react-router-redux";
import DashboardReducer from "./Reducers/DashboardReducer";
import AuthReducer from "./Reducers/AuthReducer";
import UserReducer from "./Reducers/UserReducer";
import ContactListReducer from "./Reducers/ContactListReducer";
import {AuthMiddleware} from "./Middlewares/AuthMiddleware";

const middleware = routerMiddleware(browserHistory);

let store = createStore(
    combineReducers({
        DashboardReducer,
        AuthReducer,
        UserReducer,
        ContactListReducer,
    }),
    applyMiddleware(
        middleware,
        AuthMiddleware
    )
);

export default store;