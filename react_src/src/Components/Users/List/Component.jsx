import React from 'react';
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";

export default class Component extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
            users: [],
            activePage: 1,
            perPage: 4,
            totalPageCount: 1,
            selectedPage: 1,
            searchTerm: ""
        };

        this.props.all(this.state.activePage, this.state.perPage, this.state.searchTerm);
    }

    componentWillReceiveProps(newProps) {
        let state = this.state;
        state.users = newProps.users;
        state.totalPageCount = newProps.totalPageCount;
        state.redirect = newProps.redirect;
        this.setState(state);
    }

    handlePageChange(data) {
        let state = this.state;
        state.selectedPage = data.selected + 1;
        this.setState(state);
        this.props.all(state.selectedPage, this.state.perPage, this.state.searchTerm);
    }

    search(e) {
        let state = this.state;
        state.searchTerm = e.target.value;
        this.setState(state);
        this.props.all(1, this.state.perPage, e.target.value);
    }

    render() {
        return (
            <div>
                <div className="box">
                    <div className="box-header">
                        <h3 className="box-title">Users List</h3>

                        <div className="box-tools">
                            <div className="input-group input-group-sm" style={{'width': '150px'}}>
                                <input type="text" name="table_search" className="form-control pull-right"
                                       placeholder="Search" onChange={this.search.bind(this)}/>

                                <div className="input-group-btn">
                                    <button type="submit" className="btn btn-default"><i
                                        className="fa fa-search"/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box-body table-responsive no-padding">
                        <table className="table table-hover">
                            <tbody>
                            <tr>
                                <th>ID</th>
                                <th>Username</th>
                                <th>Password</th>
                            </tr>

                            {this.state.users.map(function (user) {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.username}</td>
                                        <td>********</td>
                                        <td>
                                            <Link to={"/app/users/" + user.id + "/edit"}>
                                                <i className="fa fa-edit"/>
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>

                        <div className="container">
                            <div className="col-md-12 pull-left text-center">
                                <ReactPaginate previousLabel={"previous"}
                                               nextLabel={"next"}
                                               breakLabel={"..."}
                                               breakClassName={"break-me"}
                                               pageCount={this.state.totalPageCount}
                                               marginPagesDisplayed={1}
                                               pageRangeDisplayed={6}
                                               onPageChange={this.handlePageChange.bind(this)}
                                               containerClassName={"pagination"}
                                               subContainerClassName={"pages pagination"}
                                               activeClassName={"active"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}