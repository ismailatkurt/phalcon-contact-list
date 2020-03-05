import React from 'react';
import SessionStorage from "../../../Helpers/SessionStorage";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageHash: Date.now()
        };
    }

    logoutUser() {
        this.props.logoutUser();
    }

    render() {
        return (
            <header className="main-header">
                <a href="/" className="logo">
                    <span className="logo-mini"><b>CL</b></span>
                    <span className="logo-lg"><b>Contact</b>List</span>
                </a>
                <nav className="navbar navbar-static-top">
                    <a href="#/" className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                    </a>

                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className="dropdown user user-menu">
                                <a href="#/" className="dropdown-toggle" data-toggle="dropdown">
                                    <img
                                        src="http://localhost/assets/images/profile.png"
                                        className="user-image" alt="Alex"/>
                                    <span className="hidden-xs">{SessionStorage.getUsername()}</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="user-header">
                                        <img
                                            src="http://localhost/assets/images/profile.png"
                                            className="img-circle" alt="web developer"/>
                                        <p>
                                            {SessionStorage.getUsername()}
                                        </p>
                                    </li>
                                    <li className="user-footer">
                                        <div className="pull-left">
                                        </div>
                                        <div className="pull-right">
                                            <button className="btn btn-default btn-flat"
                                                    onClick={this.logoutUser.bind(this)}>Sign out
                                            </button>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}
