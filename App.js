/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';


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
          style={styles.searchBar}
          placeholder='Search'
          value={this.state.placeName} 
          onChange={text => this.setState({search: text})}
        />
        <View style={styles.contactNavRow}>
          <View style={{width: '50%'}}>
            <Button
              style={styles.navButton}
              onPress={() => console.log('Recents')}
              title='Recents' 
              color="#841584"
            />
          </View>
          <View style={{width: '50%'}}>
            <Button 
              style={styles.navButton}
              onPress={() => console.log('Contacts')}
              title='Contacts' 
              color="#841584"
            /> 
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({ 
  container: { 
    width: '100%', 
    padding: 40, 
    flex: 1, 
    backgroundColor: '#fff', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'flex-start'
  }, 
  searchBar: { 
    width: 300, 
    backgroundColor: '#eff2f7', 
    borderColor: '#d0d3d8', 
    borderRadius: 5, 
    borderWidth: 1
  }, 
  contactNavRow: { 
    flexDirection: 'row', 
    width: '100%',
    justifyContent: 'space-between', 
  }, 
  navButton: { 
    borderColor: '#d0d3d8', 
    borderRadius: 10, 
    borderWidth: 1
  }
}); 
