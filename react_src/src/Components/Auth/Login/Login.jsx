import React from 'react';
import SessionStorage from "../../../Helpers/SessionStorage";

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: '',
                password: ''
            }
        };

        if (SessionStorage.getToken() !== '' && SessionStorage.getToken() !== null) {
            this.props.history.push('/app/contacts');
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.token !== '') {
            this.props.history.push('/app/contacts');
        }
    }

    componentDidMount() {
        document.body.classList.add('login-page')
    }

    componentWillUnmount() {
        document.body.classList.remove('login-page')
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

    handleSubmit() {
        this.props.loginUser(this.state.user.username, this.state.user.password);
    }

    render() {
        return (
            <div>
                <div className="login-box">
                    <div className="login-logo">
                        <a href="/"><b>Contact</b>List</a>
                    </div>
                    <div className="login-box-body">
                        <p className="login-box-msg">Sign in to start your session</p>

                        <form>
                            <div className="form-group has-feedback">
                                <input type="text" className="form-control" name="username"
                                       value={this.state.user.username} onChange={this.handleUsernameChange.bind(this)}
                                       placeholder="Username"/>
                                <span className="glyphicon glyphicon-envelope form-control-feedback"/>
                            </div>
                            <div className="form-group has-feedback">
                                <input type="password" name="password" value={this.state.user.password}
                                       onChange={this.handlePasswordChange.bind(this)}
                                       className="form-control" placeholder="Password"/>
                                <span className="glyphicon glyphicon-lock form-control-feedback"/>
                            </div>
                            <div className="form-group">
                                <button type="button" onClick={this.handleSubmit.bind(this)}
                                        className="btn btn-primary btn-block btn-flat">Sign In
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
