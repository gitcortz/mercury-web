import React, { Component } from "react";
import "./App.css";
import TopNav from "./components/layout/TopNav";
import Footer from "./components/layout/Footer";
import SideNav from "./components/layout/SideNav";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App page-wrapper mercury-theme">
          <SideNav />
          <div class="page-content">
            <TopNav />
            <Route exact path="/" component={Dashboard} />
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
