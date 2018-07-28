import React, { Component } from 'react';
import { View, Text, Image,StyleSheet } from 'react-native';
import LoginForm from './src/components/LoginForm'

export default class App extends Component  {
  render(){
    
    return (
      <View style= { styles.container } >
        <LoginForm/>
      </View>
    
    );
  }

}
const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    justifyContent: 'center',
  },
 
});
  