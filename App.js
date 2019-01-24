/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput } from 'react-native';


export default class App extends Component {
  constructor(props) { 
    super(props); 
    this.state = { 
      search: ''
    }; 
  
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style={{
            width: 300, 
            backgroundColor: '#eff2f7', 
            borderColor: '#d0d3d8', 
            borderRadius: 5, 
            borderWidth: 1
          }}
          placeholder="Search"
          value={this.state.placeName} 
          onChange={text => this.setState({search: text})}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({ 
  container: { 
    padding: 40, 
    flex: 1, 
    backgroundColor: '#fff', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'flex-start'
  }
}); 
