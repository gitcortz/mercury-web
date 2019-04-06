import React, { Component } from "react";
import { Nav, NavItem, NavLink, Collapse } from "reactstrap";

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle(e) {
    console.log(e.target.name);
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    return (
      <div id="sidebar">
        <div class="sidebar-header">
          <h4>Mercury</h4>
          <strong>M</strong>
        </div>
        <Nav vertical>
          <NavItem>
            <NavLink href="#" name="Sales" onClick={this.toggle}>
              <i className="fa fa-money fa-fw" />
              Sales
            </NavLink>
          </NavItem>
          <Collapse isOpen={this.state.collapse}>
            <NavItem>
              <NavLink href="#">Link1.1</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link1.2</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link1.3</NavLink>
            </NavItem>
          </Collapse>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
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
