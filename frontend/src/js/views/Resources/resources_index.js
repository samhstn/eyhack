import React, { Component } from 'react'
import {Button, Col, Row} from 'react-bootstrap'
import { connect } from 'react-redux'
import Modal from '../../components/eventModalContainer.js'

import { toggleModal, changeCurrentEvent } from '../../actions/actions_index.js'

const actionCreators = {
  toggleModal,
  changeCurrentEvent
}

const styles = {
  li: {
    listStyleType: 'none',
    color: 'black',
    fontSize: '1.7em',
    textDecoration: 'none',
    padding: '0.5em 2em 2em 2em',
    margin: '9px',
    border: '3px solid #199FD4',
    borderRadius: '10px'
  },
  ul: {
    padding: '2em',
    borderRadius: '10px',
    marginRight: '20%',
    marginLeft: '20%'
  }
}

class Resources extends Component {
  render() {
    return(
      <div>
        <ul style={styles.ul}>
          {this.props.lessons.map((lesson, index) => {
            return (
              <li style={styles.li}>
                <h3 style={{fontSize: '2em'}}><a href={lesson.url} target='_blank'>{lesson.title}</a></h3>
                <Row>
                  <Col md={2}><strong>Venue</strong></Col>
                  <Col md={10}>{lesson.venue}</Col>
                </Row>
                <Row>
                  <Col md={2}><strong>Time</strong></Col>
                  <Col md={5}>{lesson.time}</Col>
                  <Col md={3}><strong>Attendees</strong></Col>
                  <Col md={2}><em>{lesson.attendees}</em></Col>
                </Row>
                <Button
                  onClick={() => {
                    this.props.changeCurrentEvent(lesson)
                    this.props.toggleModal()
                  }}
                >MORE INFO
                </Button>
            </li>
          )}
        )}
        </ul>
        <Modal />
      </div>
    )
  }
}

const mapStateToProps = state => ({...state})

export default connect(mapStateToProps, actionCreators)(Resources)
