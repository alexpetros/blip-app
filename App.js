import React, { Component } from 'react';
import MainTabBar from './navigation/main_tab_bar';
// import { getResponse } from './apiFetcher';


// disable really annoying in app warnings
console.disableYellowBox = true;

// TODO: reimplement server functionality

export default class App extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    // TODO: when server is up reimplement fetch
    // getResponse().then((res) => {
    //   this.setState({ text: res.text });
    // });
  }

  render() {
    return <MainTabBar />;
  }
}
