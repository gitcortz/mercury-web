import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact } from "../../../../actions/contactActions";

class ContactItem extends Component {
  onDeleteClick(id) {
    this.props.deleteContact(id);
  }

  render() {
    const { contact } = this.props;
    return (
      <div class="card">
        <div class="card-body">
          <div class="text-right">
            <Link to={`/contact/update/${contact.id}`}>
              <i class="fa fa-edit" />
            </Link>
          </div>

          <h5 class="card-title">{contact.profile.name}</h5>
          <ul class="list-unstyled">
            <li>
              {contact.profile.numbers.map((item, key) => (
                <li key={item.label + "_" + key}>
                  {item.label} : <a href="tel:">{item.value.phone_number}</a>
                </li>
              ))}
            </li>
          </ul>
          <div class="text-right">
            <button
              className="btn btn-danger ml-4"
              onClick={this.onDeleteClick.bind(this, contact.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

ContactItem.propTypes = {
  deleteContact: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteContact }
)(ContactItem);
