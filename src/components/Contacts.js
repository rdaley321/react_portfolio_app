import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Contacts extends Component {
  render() {
    return (
      <div className="contact-div cl-effect-14">
        <div>
          <h1>Contact me at:</h1>
          <p>Email: johnwayne@yahoo.com</p>
          <hr></hr>
          <nav>
            <Link to='http://www.linkedin.com/johnwayne'>Linkedin</Link>
            <hr></hr>
            <Link to='http://www.facebook.com/johnwayne'>Facebook</Link>
            <hr></hr>
            <Link to='http://www.twitter.com/johnwayne'>Twitter</Link>
          </nav>
        </div>
      </div>
    )
  }
}
