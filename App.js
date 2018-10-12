/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';

export default class App extends Component<Props> {
  state = {
    showTooltip: false,
  }

  render() {
    const { showTooltip } = this.state
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.emptySpace}></View>
        <Text>Tap the button, then scroll and tap again.</Text>
        <Tooltip
          isVisible={showTooltip}
          placement='top'
          onClose={() => this.setState({showTooltip: !showTooltip})}
          content={<Text>This is the tooltip text.</Text>}
        >
          <TouchableOpacity
            onPress={() => this.setState({showTooltip: !showTooltip})}
            style={styles.button}>
            <Text>Button</Text>
          </TouchableOpacity>
        </Tooltip>
        <View style={styles.emptySpace}></View>
        <View style={styles.emptySpace}></View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },

  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    backgroundColor: 'blue',
    padding: 10,
    marginTop: 15,
  },

  emptySpace: {
    height: 400,
  }
});
