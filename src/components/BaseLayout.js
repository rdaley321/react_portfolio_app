import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

export default class BaseLayout extends Component {
  render() {
    return(
      <div className='whole-page'>
        <div className='layout-content'>
          <div className="navbar">
            <NavLink exact to="/" activeStyle={{color: 'yellow'}} activeClassName='selected'>Home</NavLink>
            <NavLink to="/portfolio" activeStyle={{color: 'yellow'}} activeClassName='selected'>Portfolio</NavLink>
            <NavLink to="/about" activeStyle={{color: 'yellow'}} activeClassName='selected'>About</NavLink>
            <NavLink to="/contacts" activeStyle={{color: 'yellow'}} activeClassName='selected'>Contacts</NavLink>
            <NavLink to="/references" activeStyle={{color: 'yellow'}} activeClassName='selected'>References</NavLink>
          </div>
          <div className="children">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
