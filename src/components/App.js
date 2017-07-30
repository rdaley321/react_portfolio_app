import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BaseLayout from './BaseLayout'
import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'
import Contacts from './Contacts'
import References from './References'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <BaseLayout>
            <Switch>
              <Route path='/contacts' component={Contacts} />
              <Route path='/references' component={References} />
              <Route path='/portfolio' component={Portfolio} />
              <Route path='/about' component={About} />
              <Route path='/' component={Home} />
            </Switch>
          </BaseLayout>
        </BrowserRouter>
    );
  }
}

export default App;
