import React, { Component } from 'react'
import AnchorJS from 'anchor-js'
import './css/flexboxgrid2.css'
import './App.css'
import './css/design.css'


import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';

import Homepage from "./pages/index";
import ModelesPage from "./pages/modeles";
import PartiePage from "./pages/partPage";
import PageNotFound from "./pages/404";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ Homepage } />
          <Route exact path="/modeles" component={ ModelesPage }/>
          <Route exact path="/thematique/:docuRef/:partPath" component={ PartiePage } />
          {/* <Route exact path="/thematique/:partPath" render={(props) => <PartiePage {...props} doc={`test`} />} /> */}
          {/* <Route exact path="/thematique/:docRef/:partPath" component={() => <PartiePage doc={this.docRef} />} /> */}
          <Route path="/404" component={ PageNotFound } />
        </Switch>
      </Router>
    );
  }
}

export default App;
