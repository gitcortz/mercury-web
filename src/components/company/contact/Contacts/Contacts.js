import React, { Component } from "react";
import { Container, Row, Col, Table } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getContacts } from "../../../../actions/contactActions";
import Spinner from "../../../common/Spinner/Spinner";

class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    console.log(this.props.contact);
    const { contacts, loading } = this.props.contact;

    let dashboardContent;
    let contactsContent;
    if (contacts === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      //Check if has data
      if (Object.keys(contacts).length > 0) {
        dashboardContent = <h4>display contact</h4>;

        contactsContent = contacts.map((contact, idx) => (
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{contact.profile.name}</h5>
              <ul class="list-unstyled">
                <li>
                  {contact.profile.numbers.map((item, key) => (
                    <li key={item.label + "_" + key}>
                      {item.label} :{" "}
                      <a href="tel:">{item.value.phone_number}</a>
                    </li>
                  ))}
                </li>
              </ul>
            </div>
          </div>
        ));
      } else {
        dashboardContent = <h4>no contact</h4>;
      }
    }

    return (
      <div>
        <h1>Contacts</h1>
        <div className="text-right mb-3 mr-3">
          <Link to="/contact/create" className="btn btn-sm btn-info">
            <i class="fa fa-plus" /> Add Contact
          </Link>
        </div>

        <Container>
          <Row>
            <Col>{contactsContent}</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contact: state.contact,
  auth: null
});

Contacts.propTypes = {
  getContacts: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  contact: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  { getContacts }
)(Contacts);
