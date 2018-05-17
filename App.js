import React, { Component } from 'react';
import MainTabBar from './navigation/main_tab_bar';

// disable really annoying in app warnings
console.disableYellowBox = true;

export default class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    return <MainTabBar />;
  }
}
