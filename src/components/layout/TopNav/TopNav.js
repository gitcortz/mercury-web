import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class TopNav extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">mercury</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  <i class="fa fa-tasks fa-fw" />
                  <span class="badge badge-danger badge-counter">3+</span>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Urgent Tasks</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Items out of stock</DropdownItem>
                  <DropdownItem>Unallocated Disbursements</DropdownItem>
                  <DropdownItem>Overdue Receivables</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  <i class="fa fa-list-alt fa-fw" />
                  <span class="badge badge-danger badge-counter">3+</span>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Add Contact</DropdownItem>
                  <DropdownItem>Add Product</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Add Service</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  <span class="mr-2 d-none d-lg-inline text-gray-600 small">
                    Valerie Luna
                  </span>
                  <img
                    class="img-profile rounded-circle"
                    src="https://source.unsplash.com/QAB-WJcbgJk/32x32"
                  />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Profile</DropdownItem>
                  <DropdownItem>Settings </DropdownItem>
                  <DropdownItem>Activity Log </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Logout</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default TopNav;
