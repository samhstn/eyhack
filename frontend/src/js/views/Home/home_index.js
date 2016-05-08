import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getUserDetails } from '../../actions/actions_index.js'

class Home extends React.Component {
  render () {
    return (
      <Grid className='home'>
        <Row>
          <Col xs={12}>
            <div className='image-container'>
              <img src='img/cepBackground.jpeg' />
            </div>
            <p>Some people are born able-bodied, Others are born Superhuman.</p>
            <p>We believe in teaching children they are great by teaching them great body control.</p>
          </Col>
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userDetails: state.userDetails
  }
}

export default connect(mapStateToProps, { getUserDetails })(Home)
