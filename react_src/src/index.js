import React from 'react';
import {render} from 'react-dom'
import AppContainer from './AppContainer';
import {Provider} from "react-redux";
import {HashRouter, Route} from 'react-router-dom'
import jQuery from 'jquery';
import 'jquery/dist/jquery.min';
import 'admin-lte/dist/css/skins/_all-skins.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'admin-lte/dist/css/AdminLTE.min.css';
import "./style.css";
import store from "./store";
import {apiUrl} from "./env";
import history from "./history";
import LoginContainer from "./Components/Auth/Login/LoginContainer";

window.jQuery = jQuery;
require('admin-lte/dist/js/adminlte.min.js');
require('bootstrap');

window.apiUrl = apiUrl;

render((
    <Provider store={store}>
        <HashRouter history={history}>
            <div>
                <Route
                    exact
                    path="/"
                    component={LoginContainer}/>
                <Route
                    path="/app"
                    component={AppContainer}/>
                <Route
                    exact
                    path="/app/login"
                    component={LoginContainer}/>
            </div>
        </HashRouter>
    </Provider>
), document.getElementById('root'));
