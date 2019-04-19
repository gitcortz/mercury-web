import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getContact, updateContact } from "../../../../actions/contactActions";
import PropTypes from "prop-types";
import TextFieldGroup from "../../../common/TextFieldGroup";
import ContactNumberInputGroup from "../ContactNumberInputGroup/ContactNumberInputGroup";

class UpdateContact extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      numbers: [{ label: "Mobile", value: { phone_number: "" } }],
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.addContactNumber = this.addContactNumber.bind(this);
    this.removeContactNumber = this.removeContactNumber.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getContact(id, this.props.history);
  }

  componentWillReceiveProps(nextProps) {
    const { id, profile } = nextProps.contact;

    this.setState({
      id: id,
      name: profile.name,
      numbers: profile.numbers,
      errors: {}
    });
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  addContactNumber(e) {
    this.setState({
      numbers: this.state.numbers.concat([
        { label: "Mobile", value: { phone_number: "" } }
      ])
    });
  }

  removeContactNumber(idx) {
    this.setState({
      numbers: this.state.numbers.filter((s, sidx) => Number(idx) !== sidx)
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const contactData = {
      name: this.state.name,
      numbers: this.state.numbers
    };

    console.log("submit " + this.state.id);
    this.props.updateContact(this.state.id, contactData, this.props.history);
  }

  onChange(e) {
    // contact label assign to state
    if (["label"].includes(e.target.getAttribute("fieldname"))) {
      let numbers = [...this.state.numbers];
      let fieldname = e.target.getAttribute("fieldname");
      numbers[e.target.dataset.id][fieldname] = e.target.value;
      this.setState({ numbers });
    }
    // contact phone number assign to state
    else if (["phone_number"].includes(e.target.getAttribute("fieldname"))) {
      let numbers = [...this.state.numbers];
      let fieldname = "value";
      numbers[e.target.dataset.id][fieldname] = {
        phone_number: e.target.value
      };
      this.setState({ numbers });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  }

  render() {
    const { errors } = this.state;
    let { numbers } = this.state;

    //options to number label
    const optionNumberLabels = [
      { label: "Home Phone", value: "Home" },
      { label: "Office Phone", value: "Office" },
      { label: "Mobile", value: "Mobile" }
    ];

    return (
      <div className="create-contact">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Update Contact</h1>

              <p className="lead text-center">update contact</p>
              <small className="d-block pb-3">* = required field(s)</small>
              <form onSubmit={this.onSubmit} onChange={this.onChange}>
                {this.state.id}
                <TextFieldGroup
                  placeholder="* Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  errors={errors.name}
                  info="Name of contact"
                />
                <hr />
                <div className="mb-3">
                  <ContactNumberInputGroup
                    numbers={numbers}
                    onChange={this.onChange}
                    onRemove={this.removeContactNumber}
                  />

                  <div className="text-left mt-3">
                    <button
                      type="button"
                      onClick={this.addContactNumber}
                      className="btn btn-success btn-sm"
                    >
                      <i class="fa fa-plus" /> Add phone
                    </button>
                  </div>
                </div>

                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UpdateContact.propTypes = {
  contact: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  getContact: PropTypes.func.isRequired,
  updateContact: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  contact: state.contact.contact,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getContact, updateContact }
)(withRouter(UpdateContact));
