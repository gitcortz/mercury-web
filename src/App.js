import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import TopNav from "./components/layout/TopNav";
import Footer from "./components/layout/Footer";
import SideNav from "./components/layout/SideNav";
import Dashboard from "./components/dashboard/Dashboard";
import Contacts from "./components/company/Contacts";
import SalesOrder from "./components/sales/SalesOrder";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import "./App.css";
import PrivateRoute from "./components/common/PrivateRoute";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App page-wrapper mercury-theme">
            <SideNav />
            <div className="page-content">
              <TopNav />
              <Route exact path="/" component={Login} />
              <Route exact path="/register" component={Register} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
              <Route exact path="/company/contacts" component={Contacts} />
              <Route exact path="/sales/order" component={SalesOrder} />
              <Footer />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
