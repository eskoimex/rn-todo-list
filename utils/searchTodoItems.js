import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../utils/Colors';
import {windowHeight, windowWidth} from '../utils/Dimensions';

export default function SearchTodoItems({ searchFilterFunction, search }) {

  return (
    <View style={styles.searchSection}>
    <MaterialCommunityIcons
              name="magnify" //
              size={20}
              color="#000"
              style={styles.searchIcon}
            />
    <TextInput
        style={styles.input}
        placeholder="Search Todos"
        placeholderTextColor= "#a8c6f0"
        value={search}
        onChangeText={searchFilterFunction}    
        underlineColorAndroid="transparent"
    />
  </View>
  );
}


const styles = StyleSheet.create({

 input: {
    flex: 1,
    paddingTop:5,
    paddingRight:5,
    paddingBottom:5,
    paddingLeft: 5,
    fontSize: 16,
    color: '#fff',
 },
 searchSection: {
  marginLeft: 15,
  marginRight: 15,
  paddingVertical: 1,
  height: windowHeight/18,
  flexDirection: "row",
  justifyContent: "space-between",
  backgroundColor: colors.tint,
  borderRadius: 20,
  marginBottom: 30,
  alignItems: "center",
},
searchIcon: {
color: colors.white, paddingLeft: 10 
},
})