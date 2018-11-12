import React from "react";
import { render } from "react-dom";
import { Modal, Button } from "react-bootstrap";

export class MyModal extends React.Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("old prop");
    console.log(prevProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("new prop");
    console.log(nextProps);
    return true;
  }
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="static-modal">
        <Modal
          show={this.props.isOpen}
          onClose={this.props.toggleModal}
          aria-labelledby="contained-modal-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Wrapped Text</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
