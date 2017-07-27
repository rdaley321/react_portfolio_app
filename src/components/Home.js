import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submitted: false
    }
  }
  handleSubmission = (e) => {
    this.setState({
      submitted: true
    })
  }
  render() {
    if(this.state.submitted === true) {
      return <Redirect to="/portfolio" />
    }
    return(
      <div>
        <div className="title">
          <h1>Welcome to John Wayne's Portofolio</h1>
          <div className="main-pic-div">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/John_Wayne_signature.svg" alt="signiture"></img>
          </div>
        </div>
        <div className="sub-title">
          <h3>Discover more about John Wayne here:</h3>
        </div>
        <form>
          <button className="homebutton" type="submit" onClick={this.handleSubmission}>Show me more!</button>
        </form>
      </div>
    )
  }
}
