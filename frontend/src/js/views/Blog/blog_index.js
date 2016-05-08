import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

const styles = {
  textAlign: 'center',
  margin: '4em auto'
}

export default (props) => {
  return (
    <Grid style={styles}>
      <Row>
        <Col xs={12}>
          <h3 style={{margin: '5% 0'}}>Get in touch via the current website or the facebook page</h3>
          <a href='http://childexpertphysio.com/' target='_blank'><h4>Website</h4></a>
          <a href='https://www.facebook.com/MyChildIsGreat/' target='_blank'><h4>facebook page</h4></a>
        </Col>
      </Row>
    </Grid>
  )
}
