import React from 'react';
import {Link} from "react-router-dom";

export default class Component extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contact: {
                id: '',
                first_name: '',
                last_name: '',
                email: ''
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

    handleFirstNameChange(e) {
        let state = this.state;
        state.contact.first_name = e.target.value;
        this.setState(state);
    }

    handleLastNameChange(e) {
        let state = this.state;
        state.contact.last_name = e.target.value;
        this.setState(state);
    }

    handleEmailChange(e) {
        let state = this.state;
        state.contact.email = e.target.value;
        this.setState(state);
    }

    componentWillReceiveProps(newProps) {
        let state = this.state;
        if (this.props.match.params.id) {
            state.contact = newProps.contact;
        }
        state.redirect = newProps.redirect;
        this.setState(state);
    }

    handleSubmit() {
        let state = this.state;
        let data = {
            first_name: state.contact.first_name,
            last_name: state.contact.last_name,
            email: state.contact.email
        };
        if (state.contact.id) {
            this.props.update(state.contact.id, data);
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
                    <h3 className="box-title">{this.state.contact.id ? "Edit Contact" : "New Contact"}</h3>
                </div>
                <form className="form-horizontal">
                    <div className="box-body">
                        <div className="form-group">
                            <label htmlFor="first_name" className="col-sm-2 control-label">First Name</label>

                            <div className="col-sm-10">
                                <input type="text" name="first_name" value={this.state.contact.first_name}
                                       onChange={this.handleFirstNameChange.bind(this)}
                                       className="form-control"
                                       id="first_name"
                                       maxLength={32}
                                       required
                                       placeholder="First Name"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="last_name" className="col-sm-2 control-label">Last Name</label>

                            <div className="col-sm-10">
                                <input name="last_name"
                                       onChange={this.handleLastNameChange.bind(this)}
                                       className="form-control"
                                       id="last_name"
                                       maxLength={40}
                                       required
                                       placeholder="Last Name" value={this.state.contact.last_name}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="col-sm-2 control-label">Email</label>

                            <div className="col-sm-10">
                                <input name="email"
                                       onChange={this.handleEmailChange.bind(this)} className="form-control"
                                       id="email"
                                       type="email"
                                       maxLength={72}
                                       required
                                       placeholder="Email" value={this.state.contact.email}/>
                            </div>
                        </div>
                    </div>
                    <div className="box-footer">
                        <div className="col-md-2 pull-left">
                            <Link to="/app/contacts" className="btn btn-block btn-success btn-flat">
                                Back to list
                            </Link>
                        </div>
                        <div className="col-md-3 pull-right">
                            <button type="button" onClick={this.handleSubmit.bind(this)}
                                    className="btn btn-info pull-right">
                                {this.state.contact.id ? "Update Contact" : "Save Contact"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}