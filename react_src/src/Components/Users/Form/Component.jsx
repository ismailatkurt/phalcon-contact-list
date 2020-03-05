import React from 'react';
import {Link} from "react-router-dom";

export default class Component extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                id: '',
                username: '',
                password: ''
            },
            redirect: false,
            actionType: 'create'
        };

        if (this.props.match.params.id) {
            this.props.edit(this.props.match.params.id);
            this.state.actionType = 'edit';
        } else {
            this.props.create();
        }
    }

    handleUsernameChange(e) {
        let state = this.state;
        state.user.username = e.target.value;
        this.setState(state);
    }

    handlePasswordChange(e) {
        let state = this.state;
        state.user.password = e.target.value;
        this.setState(state);
    }

    componentWillReceiveProps(newProps) {
        let state = this.state;
        if (this.props.match.params.id) {
            state.user = newProps.user;
            state.user.password = '';
        }
        state.redirect = newProps.redirect;
        this.setState(state);
    }

    handleSubmit() {
        let state = this.state;
        let data = {
            username: state.user.username,
            password: state.user.password
        };
        if (state.user.id) {
            this.props.update(state.user.id, data);
        } else {
            this.props.save(data);
        }
    }

    render() {
        if (this.state.redirect) {
            this.props.history.push(this.state.redirect);
            return null;
        }

        return (
            <div className="box">
                <div className="box-header">
                    <h3 className="box-title">{this.state.user.id ? "Edit User" : "New User"}</h3>
                </div>
                <form className="form-horizontal">
                    <div className="box-body">
                        <div className="form-group">
                            <label htmlFor="username" className="col-sm-2 control-label">Username</label>

                            <div className="col-sm-10">
                                <input type="text" name="username" value={this.state.user.username}
                                       onChange={this.handleUsernameChange.bind(this)}
                                       className="form-control"
                                       id="username"
                                       maxLength={32}
                                       required
                                       placeholder="Username"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="col-sm-2 control-label">Password</label>

                            <div className="col-sm-10">
                                <input name="password"
                                       onChange={this.handlePasswordChange.bind(this)}
                                       className="form-control"
                                       id="password"
                                       maxLength={40}
                                       required
                                       placeholder="Password" value={this.state.user.password}/>
                            </div>
                        </div>
                    </div>
                    <div className="box-footer">
                        <div className="col-md-2 pull-left">
                            <Link to="/app/users" className="btn btn-block btn-success btn-flat">
                                Back to list
                            </Link>
                        </div>
                        <div className="col-md-3 pull-right">
                            <button type="button" onClick={this.handleSubmit.bind(this)}
                                    className="btn btn-info pull-right">
                                {this.state.user.id ? "Update User" : "Save User"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}