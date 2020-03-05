import React from 'react';
import {Link} from "react-router-dom";
import SessionStorage from "../../../Helpers/SessionStorage";

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageHash: Date.now(),
            currentRoute: this.props.location.pathname
        };

    }

    componentWillReceiveProps(newProps) {
        let state = this.state;
        state.currentRoute = newProps.location.pathname;
        this.setState(state);
    }

    render() {
        return (
            <div>
                <aside className="main-sidebar">
                    <section className="sidebar">
                        <div className="user-panel">
                            <div className="pull-left image">
                                <img
                                    src="http://localhost/assets/images/profile.png"
                                    className="img-circle" alt="sidebar"/>
                            </div>
                            <div className="pull-left info">
                                <p>{SessionStorage.getUsername()}</p>
                                <Link to="#"><i className="fa fa-circle text-success"/> Online</Link>
                            </div>
                        </div>
                        <ul className="sidebar-menu tree" data-widget="tree">
                            <li className="header">MAIN NAVIGATION</li>
                            <li className="treeview active menu-open">
                                <Link to="/#">
                                    <i className="fa fa-files-o"/>
                                    <span>Contacts</span>
                                </Link>
                                <ul className="treeview-menu">
                                    <li className={this.state.currentRoute === '/app/contacts' ? "active" : ""}>
                                        <Link to="/app/contacts"><i className="fa fa-circle-o"/> List Contacts</Link>
                                    </li>
                                    <li className={this.state.currentRoute === '/app/contacts/create' ? "active" : ""}>
                                        <Link to="/app/contacts/create"><i className="fa fa-circle-o"/> Create New
                                            Contact</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="treeview active menu-open">
                                <Link to="/#">
                                    <i className="fa fa-files-o"/>
                                    <span>Users</span>
                                </Link>
                                <ul className="treeview-menu">
                                    <li className={this.state.currentRoute === '/app/users' ? "active" : ""}>
                                        <Link to="/app/users"><i className="fa fa-circle-o"/> List Users</Link>
                                    </li>
                                    <li className={this.state.currentRoute === '/app/users/create' ? "active" : ""}>
                                        <Link to="/app/users/create"><i className="fa fa-circle-o"/> Create
                                            User</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </section>
                </aside>

            </div>
        );
    }
}
