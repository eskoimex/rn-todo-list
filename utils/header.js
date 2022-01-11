import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../utils/Colors';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
    <MaterialCommunityIcons
      name="format-list-checks"
      size={30}
      style={{ color: colors.white }}
    />
    <Text style={styles.title}>Todo List</Text>

  </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: 16,
      flexDirection: "row",
      justifyContent: 'flex-start'
  },
  title: {
    fontSize: 20, 
    color:'#fff', 
    alignSelf:'flex-start', 
    marginLeft: 10, 
    fontWeight:'bold'
  },
  todoCount :{
     marginLeft:175,
     backgroundColor:'#fff',
     width: 30,
     height: 30,
     borderRadius: 30/2
  },
  

});