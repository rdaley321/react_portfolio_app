import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

export default class About extends Component {
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
      return <Redirect to="/home" />
    }
    return(
      <div className="about-pic-div">
        <img classname="about-pic" src="https://upload.wikimedia.org/wikipedia/commons/7/7b/John_Wayne_-_still_portrait.jpg" alt="johnwaynemain"></img>
          <p>Marion Mitchell Morrison (born Marion Robert Morrison; May 26, 1907 – June 11, 1979), known professionally as John Wayne and nicknamed Duke, was an American actor and filmmaker. An Academy Award-winner for True Grit (1969), Wayne was among the top box office draws for three decades.</p>
          <p>Born in Winterset, Iowa, Wayne grew up in Southern California. He found work at local film studios when he lost his football scholarship to the University of Southern California as a result of a bodysurfing accident. Initially working for the Fox Film Corporation, he appeared mostly in small bit parts. His first leading role came in Raoul Walsh's The Big Trail (1930), which led to leading roles in numerous B movies throughout the 1930s, many of them in the Western genre.</p>
          <p>Wayne's career took off in 1939, with John Ford's Stagecoach making him an instant star. He went on to star in 142 pictures. Biographer Ronald Davis said, "John Wayne personified for millions the nation's frontier heritage. Eighty-three of his movies were Westerns, and in them he played cowboys, cavalrymen, and unconquerable loners extracted from the Republic's central creation myth."</p>
          <p>Wayne's other well-known Western roles include a cattleman driving his herd north on the Chisholm Trail in Red River (1948), a Civil War veteran whose young niece is abducted by a tribe of Comanches in The Searchers (1956), and a troubled rancher competing with a lawyer for a woman's hand in marriage in The Man Who Shot Liberty Valance (1962). He is also remembered for his roles in The Quiet Man (1952), Rio Bravo (1959), and The Longest Day (1962). In his final screen performance, he starred as an aging gunfighter battling cancer in The Shootist (1976). He appeared with many important Hollywood stars of his era, and his last public appearance was at the Academy Awards ceremony on April 9, 1979.</p>
          <p>Source: Wikipedia</p>
          <form>
            <button className="homebutton" type="submit" onClick={this.handleSubmission}>Take me Home!</button>
          </form>
      </div>
    )
  }
}
