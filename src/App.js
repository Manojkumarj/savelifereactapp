import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import LandingPage from './LandingPage';

class App extends Component {
	
  render() {
    return (
	<div>
	
	<LandingPage/>
	</div>
    );
	 
  }
}

export default withRouter(App);
