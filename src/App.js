import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App page-wrapper mercury-theme">
            <SideNav />
            <div class="page-content">
              <TopNav />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/" component={Dashboard} />
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
