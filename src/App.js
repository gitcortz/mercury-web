import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import TopNav from "./components/layout/TopNav";
import Footer from "./components/layout/Footer";
import SideNav from "./components/layout/SideNav";
import Dashboard from "./components/dashboard/Dashboard";
import Contacts from "./components/company/contact/Contacts";
import SalesOrder from "./components/sales/SalesOrder";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import "./App.css";
import "./custom.css";
import PrivateRoute from "./components/common/PrivateRoute";
import AddContact from "./components/company/contact/AddContact";
import UpdateContact from "./components/company/contact/UpdateContact";
import PurchaseOrder from "./components/purchasing/PurchaseOrder";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/purchase/order",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: "/shoelaces",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  }
];

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          {/*routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.sidebar}
            />
          ))*/}
          <div className="App page-wrapper mercury-theme">
            <SideNav />
            <div className="page-content">
              <TopNav />
              <Route exact path="/contact/create" component={AddContact} />
              <Route
                exact
                path="/contact/update/:id"
                component={UpdateContact}
              />
              <Route exact path="/" component={Login} />
              <Route exact path="/register" component={Register} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
              <Route exact path="/contact" component={Contacts} />
              <Route exact path="/sales/order" component={SalesOrder} />
              <Route exact path="/purchase/order" component={PurchaseOrder} />
              <Footer />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
