import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom'

export default class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submitted: false
    }
  }
  handleSubmission = (e) => {
    this.setState({submitted: true})
  }
  render() {
    if (this.state.submitted === true) {
      return <Redirect to="/about"/>
    }
    return (
      <div>
        <div className="slideshow">
          <p>SlideShow</p>
        </div>
        <div className='carousel'>
          <ul className='panes'>
            <li>
              <Link to="/about"><img src='https://www.paulickreport.com/wp-content/uploads/2013/02/john-wayne-2-1.jpg' alt="jw1"/></Link>
            </li>
            <li>
              <Link to="/about"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/John_Wayne_-_1961.JPG/260px-John_Wayne_-_1961.JPG" alt="jw2"/></Link>
            </li>
            <li>
              <Link to="/about"><img src='https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzIyMzI2MDMw/john-wayne-9525664-1-402.jpg' alt="jw3"/></Link>
            </li>
            <li>
              <Link to="/about"><img src='http://cdn.images.express.co.uk/img/dynamic/79/590x/11f38wayne1-469761.jpg' alt="jw4"/></Link>
            </li>
            <li>
              <Link to="/about"><img src='https://images-production.global.ssl.fastly.net/uploads/posts/image/48838/john-wayne.jpg' alt="jw5"/></Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
