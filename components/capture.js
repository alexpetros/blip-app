import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Capture extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          This is gonna have a super sleek video editor, I PROMISE.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 300,
  },
});

export default Capture;
