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
          <h3 style={{margin: '5% 0'}}>Contact details</h3>
          <p>mobile: 07968 614643</p>
          <p>email: childexpertphysio@gmail.com</p>
        </Col>
      </Row>
    </Grid>
  )
}
