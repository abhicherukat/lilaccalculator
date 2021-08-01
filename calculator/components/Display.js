import React, { Component } from 'react'
import { View, SafeAreaView, Text, StyleSheet } from 'react-native'
import colors from '../util/colors';

const Display = ({ state }) => (
  <View style={styles.container}>
    <SafeAreaView style={styles.safe}>
      <Text
        style={styles.display}
        adjustsFontSizeToFit
        numberOfLines={1}
      >{state.display}</Text>
        </SafeAreaView>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3E403F',
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 24,
  },
  safe: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  display: {
    textAlign: 'right',
    fontWeight: 'bold',
    color: '#838584',
  },
  result: {
    textAlign: 'right',
    color: colors.white,
    fontSize: 20,
  },
})

export default Display;