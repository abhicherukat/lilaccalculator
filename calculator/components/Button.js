import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'

class Button extends Component {

  handleOperation = () => {
    this.props.operation(this.props.char)
  }

  

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.operation(this.props.char)}
        style={styles.container}
      >

          <Text style={styles.text}>{this.props.char}</Text>

      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#838584',
    fontSize: 25
  }
})

export default Button;
