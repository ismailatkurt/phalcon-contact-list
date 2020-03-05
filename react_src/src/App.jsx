import React, {Component} from 'react';
import {Container as ContactListContainer} from "./Components/Contacts/List/Container";
import {Container as ContactListFormContainer} from "./Components/Contacts/Form/Container";
import {Container as UserContainer} from "./Components/Users/List/Container";
import {Container as UserFormContainer} from "./Components/Users/Form/Container";
import {Route} from "react-router-dom";
import HeaderContainer from "./Components/Layout/Header/HeaderContainer";
import SidebarContainer from "./Components/Layout/Sidebar/SidebarContainer";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <div className="wrapper">

                    <HeaderContainer/>
                    <SidebarContainer/>

                    <div className="content-wrapper">

                        <section className="content">
                            <Route
                                exact
                                path={'/app/contacts'}
                                component={ContactListContainer}/>
                            <Route
                                exact
                                path={'/app/contacts/create'}
                                component={ContactListFormContainer}/>
                            <Route
                                exact
                                path={'/app/contacts/:id/edit'}
                                component={ContactListFormContainer}/>

                            <Route
                                exact
                                path={'/app/users'}
                                component={UserContainer}/>
                            <Route
                                exact
                                path={'/app/users/create'}
                                component={UserFormContainer}/>
                            <Route
                                exact
                                path={'/app/users/:id/edit'}
                                component={UserFormContainer}/>
                        </section>

                    </div>

                </div>
            </div>
        );
    }
}

export default App;
