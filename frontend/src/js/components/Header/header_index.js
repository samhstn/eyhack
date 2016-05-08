import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router'


export default class Header extends React.Component {
  constructor () {
    super()
    this.state = { menuOpen: false }
  }

  render () {
    console.log(this.props)
    return (
      <div>
        <Navbar
          expanded={this.state.menuOpen}
          onToggle={() => { this.setState({ menuOpen: !this.state.menuOpen }) }}
          className='top-menu'
          fixedTop={false}
          style={{backgroundImage: 'url("http://i.imgur.com/w2iFUNf.jpg")'}}>
          <Navbar.Header>
            <Navbar.Brand>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar>
      </div>
    )
  }
}
