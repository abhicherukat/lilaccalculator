import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import colors from '../util/colors';

class OperatorButton extends Component {


    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
      }
  

  handleOperation = () => {

  }

  result (val) {

    this.setState({

        active: true,

    })
   

    this.props.operation(val)

  }

  render() {
    return (
      <TouchableOpacity

        onPress={() => this.result(this.props.char)}
    

        style={ this.state.active && this.props.char === '=' ? 
                            
  styles.container : styles. btnActive
            
           }

      >
          

          <Text
          
        style={ this.state.active  && this.props.char === '=' ? 
                            
            styles.textNormal : styles. text
                      
                     }
          
          
          >{this.props.char}</Text>

      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#FAF5BE',
    width: 50,
    height: 50,
    borderRadius: 50/2,
    color:'black',
  
  },
  btnActive:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:250,
  },
  textNormal: {
    fontSize: 20,

    color:'black'
  },
  text:{
    color: '#838584',
    fontSize: 30

    
  }
})

export default OperatorButton;
