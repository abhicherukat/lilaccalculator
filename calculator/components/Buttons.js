import React, { Component } from 'react'
import { View, SafeAreaView, Text, StyleSheet } from 'react-native'

import Button from './Button'
import OperatorButton from './OperatorButton'

class Buttons extends Component {
  
  operatorSelected = operation => {
    this.props.operation(operation)
  }

  render() {

    const numbers = [
        ['C', '+/-', '%'],
        ['7', '8', '9'],
        ['4', '5', '6'],
        ['1', '2', '3'],
        ['.', '0', '00'],
      
      ]
    const operations = ['/', '×', '-', '+', '=']
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.numbers}>
        {numbers.map((row, i) => 
          <View key={i} style={styles.row}>
            {row.map(char => 
              <Button key={char} char={char} operation={this.operatorSelected} />
            )}
          </View>
        )}
        </SafeAreaView>
        <SafeAreaView style={styles.operations}>
          {operations.map(char => 
          
            <OperatorButton key={char} char={char} operation={this.operatorSelected}  theme="accent"  />
          )}
        </SafeAreaView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: 'row',
    // marginTop:200
    // backgroundColor:'yellow'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    color:'white',
 
  },
  numbers: {
    flex: 3,
    color:'white',
 
  },
  operations: {
    // flex: 1,
    backgroundColor: '#363636',
    borderRadius:250,
    // backgroundColor:'yellow',
    // padding:20
    width:55,
    marginRight:20

  }
})

export default Buttons;