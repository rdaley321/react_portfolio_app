import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class BaseLayout extends Component {
  render() {
    return(
      <div className='whole-page'>
        <div className='layout-content'>
          <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/about">About</Link>
          </div>
          <div className="children">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
