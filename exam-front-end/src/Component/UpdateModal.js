import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export class UpdateModal extends Component {
  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={this.props.updateData}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>IMG</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter img"
                  name="strDrinkThumb"
                  defaultValue={this.props.modalData.strDrinkThumb}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Cocktail name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name=" strDrink"
                  defaultValue={this.props.modalData.strDrink}
                />
              </Form.Group>

              <button variant="primary" type="submit">
                Submit
              </button>
            </Form>
          </Modal.Body>

          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default UpdateModal;
