import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import Recipes from './components/pages/Recipes';
import SingleRecipe from './components/pages/SingleRecipe';
import Default from './components/pages/Default';
import Navbar from './components/Navbar/Navbar';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <main>
          {/* navbar */}
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/recipes" exact component={Recipes} />
            <Route path="/recipes/:id" component={SingleRecipe} />
            <Route component={Default} />
          </Switch>
        </main>
      </Router>
    )
  }
}

