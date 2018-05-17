import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { getResponse } from './src/services/apiFetcher';

export default class App extends Component {
  constructor(props) {
    super();

    this.state = {
      text: 'loading',
    };
  }

  componentDidMount() {
    getResponse().then((res) => {
      this.setState({ text: res.text });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
