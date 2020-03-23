import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.Component {

  render() {
    return(
      <div id='Nav'>
        <Link to='/'>Goin' Home</Link>
        <Link to='/about'>All About You</Link>
        <Link to='/contact'>Meet Her Connection</Link>
      </div>
    )
  }
}

export default Nav
