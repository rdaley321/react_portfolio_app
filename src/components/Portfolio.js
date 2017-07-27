import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

export default class Portfolio extends Component {
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
      return <Redirect to="/about" />
    }
    return(
      <div className="portfolio">
        <div className="portfolio-img-div">
          <img src="https://www.paulickreport.com/wp-content/uploads/2013/02/john-wayne-2-1.jpg" alt='john-wayne'></img>
        </div>
        <form>
          <button className="homebutton" type="submit" onClick={this.handleSubmission}>Take me to the About!</button>
        </form>
      </div>
    )
  }
}
