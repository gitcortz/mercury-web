import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getContact } from "../../../actions/contactActions";
import Spinner from "../../common/Spinner/Spinner";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getContact();
  }

  render() {
    const { contact, loading } = this.props.contact;

    let dashboardContent;
    if (contact === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      //Check if has data
      if (Object.keys(contact).length > 0) {
        dashboardContent = <h4>display contact</h4>;
      } else {
        dashboardContent = <h4>no contact</h4>;
      }
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contact: state.contact,
  auth: null
});

Dashboard.propTypes = {
  getContact: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  contact: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  { getContact }
)(Dashboard);
