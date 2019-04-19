import React, { Component } from "react";
import { Container, Row, Col, Table } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
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

        contactsContent = contacts.map((val, idx) => (
          <tr id={contacts[idx].id}>
            <th scope="row">{idx + 1}</th>
            <td>{contacts[idx].profile.name}</td>

            <td>@fat</td>
          </tr>
        ));
      } else {
        dashboardContent = <h4>no contact</h4>;
      }
    }

    return (
      <div>
        <h1>Contacts</h1>
        <Container>
          <Row>
            <Col>
              {dashboardContent}
              <Table striped hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  {contactsContent}
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
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
