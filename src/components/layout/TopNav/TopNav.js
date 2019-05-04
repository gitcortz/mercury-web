import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";
import ModalWindow from "../../common/ModalWindow/ModalWindow";
import AddContact from "../../company/contact/AddContact";

class TopNav extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      isOpen: false,
      modal: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const closeBtn = (
      <button className="close" onClick={this.toggleModal}>
        &times;
      </button>
    );

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">mercury</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  <i className="fa fa-tasks fa-fw" />
                  <span className="badge badge-danger badge-counter">3+</span>
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
                  <i className="fa fa-list-alt fa-fw" />
                  <span className="badge badge-danger badge-counter">3+</span>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={this.toggleModal}>
                    Add Contact
                  </DropdownItem>
                  <DropdownItem>Add Product</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Add Service</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                    Valerie Luna
                  </span>
                  <img
                    className="img-profile rounded-circle"
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
        <ModalWindow
          isOpen={this.state.modal}
          onToggle={this.toggleModal}
          body={<AddContact />}
        />
      </div>
    );
  }
}

export default TopNav;
