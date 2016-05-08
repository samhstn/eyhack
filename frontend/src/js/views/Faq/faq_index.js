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
          <p>Q: Every time I do this my child cries?</p>
          <p style={{margin: '0 0 5% 0'}}>A: </p>
          <p>Q: I think I'm hurting my child</p>
          <p style={{margin: '0 0 5% 0'}}>A: </p>
        </Col>
      </Row>
    </Grid>
  )
}
