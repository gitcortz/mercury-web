import React, { Component } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";
import AddContact from "../../company/contact/AddContact";

class ModalWindow extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit() {
    this.activityFormButton.click();
  }

  onClick = () => {
    this.refs.form.getWrappedInstance().submit();
  };

  render() {
    const closeBtn = (
      <button className="close" onClick={this.props.onToggle}>
        &times;
      </button>
    );
    // const aComponent = <AddContact />;

    return (
      <div>
        <Button color="danger" onClick={this.props.onToggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.props.isOpen}
          toggle={this.props.onToggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.props.onToggle} close={closeBtn}>
            Modal title
          </ModalHeader>
          <ModalBody>
            <AddContact ref={"form"} />
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              form="myForm"
              key="submit"
              htmlType="submit"
            >
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={this.props.onToggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalWindow;
