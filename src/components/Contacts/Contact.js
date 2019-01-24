import React from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'; 

const contact = (props) => ( 
  <TouchableOpacity
    onPress={() => console.log('hi')}
  >
    <View 
      style={styles.contact}>
      <Text>{props.contactName}</Text>
    </View>
  </TouchableOpacity>
); 

const styles = StyleSheet.create({ 
  contact: { 
    width: '100%', 
    padding: 10, 
    backgroundColor: '#eee'
  }
}); 

export default contact; 