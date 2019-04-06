import React, { Component } from "react";
import "./App.css";
import TopNav from "./components/layout/TopNav";
import Footer from "./components/layout/Footer";
import SideNav from "./components/layout/SideNav";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contacts from "./components/company/Contacts";
import SalesOrder from "./components/sales/SalesOrder";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App page-wrapper mercury-theme">
          <SideNav />
          <div class="page-content">
            <TopNav />
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/salesorder" component={SalesOrder} />
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
