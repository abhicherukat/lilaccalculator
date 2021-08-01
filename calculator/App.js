import React, { Component } from 'react';
import { StatusBar, StyleSheet, SafeAreaView, View ,Text,TouchableOpacity,Button} from 'react-native';
import Modal from 'react-native-modal';
import Buttons from './components/Buttons'

export default class App extends Component {

  state = {
    display: '',
    result: '',
    showModal:false,
    modalStatus:false
  }

  handleOperation = operation => {
    if (operation === '1' || operation === '3' || operation === '9' ||operation === '+') {

      this.setState({
        modalStatus:true,
      })





      const display = this.state.display + operation
      let result = this.state.result
      try {

        let fixedOperation = display.split('×').join('*')
        fixedOperation = fixedOperation.split('÷').join('/')
        fixedOperation = fixedOperation.split(',').join('.')

        result = new String(eval(fixedOperation)).toString()

      }catch(e) {}
      this.setState({
        display,
        result
      })



    }
    else if(operation === '='  && this.state.modalStatus === true) {



      


      this.setState({
        
        showModal:true,
      })
    }
    else {
     }
  }

  toggleModal = ()=>{


    this.setState({
        
      showModal:false,
    })
  }



  
  render() {
    return (

      <>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View
        
        style={{

            flex: 3,
    justifyContent: 'flex-end',
    marginBottom:20
  
        }}
        >
        <Text
        style={styles.display}
        adjustsFontSizeToFit
        numberOfLines={1}
      >{this.state.display}</Text>

      </View>
      <View
      style={{

        width:'100%',
        alignItems:'center'
      }}
      >

      <View style={{

        backgroundColor:'black',
        width:'90%',
        height:0.5,
        marginBottom:25
      }}/>

      </View>
        <Buttons operation={this.handleOperation} />
      </View>
        
   
      <Modal isVisible={this.state.showModal} style={{borderRadius:40}}   onBackdropPress={this.toggleModal}  >
        <View style={{ backgroundColor: '#9C9E9D', padding: 16,borderRadius:40 ,margin:40}}>
          <View
            style={{ marginBottom: 10 ,paddingTop:80,paddingBottom:80,alignItems:'center'}}
            onPress={() => {
              // selectCamera('Camera');
              // toggleModal();
            }}>
            <Text style={{ color: '#FFFFFF', fontSize: 25 }}>Hello World</Text>
          </View>
        </View>
      </Modal>
  
         </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#3E403F',
    
  },
  display: {
    textAlign: 'right',
    fontWeight: 'bold',
    color: '#838584',
    fontSize: 25,
    paddingHorizontal:25
  },
  modal: {  
    justifyContent: 'center',  
    alignItems: 'center',   
    backgroundColor : "#00BCD4",   
    height: 300 ,  
    width: '80%',  
    borderRadius:10,  
    borderWidth: 1,  
    borderColor: '#fff',    
    marginTop: 80,  
    marginLeft: 40,  
     
     },  
});