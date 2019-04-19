import React, { Component } from "react";
import { Container, Row, Col, Table } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getContacts, deleteContact } from "../../../../actions/contactActions";
import Spinner from "../../../common/Spinner/Spinner";
import ContactItem from "../ContactItem/ContactItem";

class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    console.log(this.props.contact);
    const { contacts, loading } = this.props.contact;

    let contactsContent;
    if (contacts === null || loading) {
      contactsContent = <Spinner />;
    } else {
      if (Object.keys(contacts).length > 0) {
        contactsContent = contacts.map((contact, idx) => (
          <ContactItem key={contact.id} contact={contact} />
        ));
      } else {
        contactsContent = <h4>no contact</h4>;
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
  deleteContact: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  contact: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  { getContacts, deleteContact }
)(Contacts);
