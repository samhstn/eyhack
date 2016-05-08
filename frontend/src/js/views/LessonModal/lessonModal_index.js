import React from 'react'
import {Button, Modal} from 'react-bootstrap'

export default React.createClass({
  close () {
    this.props.toggleModalFunc()
  },

  render () {
    return (
      <div>
        <Modal show={this.props.toggleModal.isOpen} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Lesson Info</Modal.Title>
          </Modal.Header>
            <h1>Hello Modal</h1>
          <Modal.Body>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
})
