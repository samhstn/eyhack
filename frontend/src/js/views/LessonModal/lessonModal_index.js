import React from 'react'
import {Button, Modal} from 'react-bootstrap'

export default React.createClass({
  close () {
    this.props.toggleModalFunc()
  },

  render () {
    console.log(this.props, 'props1!!')
    return (
      <div>
        <Modal show={this.props.toggleModal.isOpen} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Lesson Info</Modal.Title>
          </Modal.Header>
            <iframe width="420" height="315" src="https://www.youtube.com/embed/xuyf2ci2SKk?autopplay=0"></iframe>
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
