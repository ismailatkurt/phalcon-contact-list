import React from 'react';
import {Link} from "react-router-dom";

export default class Management extends React.Component {
    constructor(props) {
        super(props);

        this.props.managementVisited();
    }

    render() {
        return (
            <div>
                <h3 className="content-max-width"><b>RSS Management</b></h3>
                <div className="row">
                    <Link to="/app/management/rss-source-categories">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="info-box">
                                <span className="info-box-icon bg-aqua"><i className="fa fa-envelope-o"/></span>

                                <div className="info-box-content">
                                    <span className="info-box-text">RSS Categories</span>
                                    <span className="info-box-number">1,410</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/app/management/rss-sources">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="info-box">
                                <span className="info-box-icon bg-green"><i className="fa fa-flag-o"/></span>

                                <div className="info-box-content">
                                    <span className="info-box-text">RSS Sources</span>
                                    <span className="info-box-number">410</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="info-box">
                            <span className="info-box-icon bg-yellow"><i className="fa fa-files-o"/></span>

                            <div className="info-box-content">
                                <span className="info-box-text">RSS News</span>
                                <span className="info-box-number">13,648</span>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="content-max-width"><b>General Management</b></h3>
                <div className="row">
                    <Link to="/app/management/languages">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="info-box">
                                <span className="info-box-icon bg-aqua"><i className="fa fa-envelope-o"/></span>

                                <div className="info-box-content">
                                    <span className="info-box-text">Languages</span>
                                    <span className="info-box-number">1,410</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <h3 className="content-max-width"><b>User Management</b></h3>
                <div className="row">
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="info-box">
                            <span className="info-box-icon bg-aqua"><i className="fa fa-envelope-o"/></span>

                            <div className="info-box-content">
                                <span className="info-box-text">Users</span>
                                <span className="info-box-number">1,410</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
