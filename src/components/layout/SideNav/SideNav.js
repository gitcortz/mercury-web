import React, { Component } from "react";
import { Nav, NavItem, NavLink, Collapse } from "reactstrap";
import { Link } from "react-router-dom";

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      sales_collapse: false,
      purchasing_collapse: false,
      inventory_collapse: false,
      accounting_collapse: false,
      reports_collapse: false,
      company_collapse: false
    };
  }

  toggle(e) {
    let value = !this.state[e.target.name];
    this.setState({ [e.target.name]: value });
  }

  render() {
    return (
      <div id="sidebar">
        <div className="sidebar-header">
          <h4>Mercury</h4>
          <strong>M</strong>
        </div>
        <Nav vertical>
          <NavItem>
            <NavLink href="#" name="sales_collapse" onClick={this.toggle}>
              <i className="fa fa-money fa-fw" />
              Sales
            </NavLink>
          </NavItem>
          <Collapse isOpen={this.state.sales_collapse}>
            <NavItem>
              <Link to="/sales/order">
                <i class="fa fa-money" />
                <span>Sales Order</span>
              </Link>
            </NavItem>
          </Collapse>
          <NavItem>
            <NavLink href="#" name="purchasing_collapse" onClick={this.toggle}>
              <i class="fa fa-shopping-cart fa-fw" />
              Purchasing
            </NavLink>
          </NavItem>
          <Collapse isOpen={this.state.purchasing_collapse}>
            <NavItem>
              <Link to="/salesorder">
                <i class="fa fa-shopping-cart fa-fw" />
                Purchase Order{" "}
                <span class="badge badge-pill badge-danger">3</span>
              </Link>
            </NavItem>
          </Collapse>
          <NavItem>
            <NavLink href="#" name="inventory_collapse" onClick={this.toggle}>
              <i class="fa fa-cubes fa-fw" />
              Inventory
            </NavLink>
          </NavItem>
          <Collapse isOpen={this.state.inventory_collapse}>
            <NavItem>
              <Link to="/inventory/transfer">
                {" "}
                <i class="fa fa-truck" />
                Transfer
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/inventory/adjustments">
                {" "}
                <i class="fa fa-edit" />
                Adjustments
              </Link>
            </NavItem>
          </Collapse>
          <NavItem>
            <NavLink href="#" name="accounting_collapse" onClick={this.toggle}>
              <i class="fa fa-balance-scale" />
              Accounting
            </NavLink>
          </NavItem>
          <Collapse isOpen={this.state.accounting_collapse}>
            <NavItem>
              <Link to="/accounting/collection">
                {" "}
                <i class="fa fa-mail-reply" />
                Collection
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/accounting/disbursement">
                {" "}
                <i class="fa fa-mail-forward" />
                Disbursement
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/accounting/expense">
                {" "}
                <i class="fa fa-credit-card" />Expense
              </Link>
            </NavItem>
          </Collapse>
          <NavItem>
            <NavLink href="#" name="reports_collapse" onClick={this.toggle}>
              <i class="fa fa-line-chart" />
              Reports
            </NavLink>
          </NavItem>
          <Collapse isOpen={this.state.reports_collapse}>
            <NavItem>
              <Link to="/reports/balancesheet">
                {" "}
                <i class="fa fa-truck" />Balance Sheet
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/accounting/profitloss">
                <i class="fa fa-edit" />Profit &amp; Loss
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/accounting/cashflow">
                {" "}
                <i class="fa fa-edit" />Cash Flow
              </Link>
            </NavItem>
          </Collapse>
          <NavItem>
            <NavLink href="#" name="company_collapse" onClick={this.toggle}>
              <i class="fa fa-building" />
              Company
            </NavLink>
          </NavItem>
          <Collapse isOpen={this.state.company_collapse}>
            <NavItem>
              <Link to="/company/contacts">
                {" "}
                <i class="fa fa-book" />Contacts
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/company/products">
                {" "}
                <i class="fa fa-cube" />Products
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/company/services">
                {" "}
                <i class="fa fa-gear" />Services
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/company/locations">
                {" "}
                <i class="fa fa-map-marker" />Locations
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/company/users">
                {" "}
                <i class="fa fa-users" />Users
              </Link>
            </NavItem>
          </Collapse>
          <NavItem>
            <Link to="/login">Login</Link>
          </NavItem>
          <NavItem>
            <Link to="/register">Register</Link>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">
              Disabled Link
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default SideNav;
