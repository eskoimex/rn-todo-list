import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../utils/Colors';
import {windowHeight, windowWidth} from '../utils/Dimensions';

export default function AddTodo({ addTodo }) {
  [task, setTask] = useState('');

  const changeHandler = (val) => {
    setTask(val);
  };

  return (
    <View
    style={styles.inputContainer}
  >
    <View style={styles.inputSection}>
          <MaterialCommunityIcons
                    name="plus" 
                    size={30}
                    color="#030430"
                    style={{paddingLeft: 10}}
                  />
          <TextInput
              style={styles.addInput}
              placeholder="Add tasks..."
              placeholderTextColor= "#606187"
              onChangeText={changeHandler}
              value={task} 
              underlineColorAndroid="transparent"
          />
          <TouchableOpacity onPress={() => addTodo(task)} 
          style={styles.addTodoIcon}>
          <MaterialCommunityIcons
          name="send-circle" 
          size={35}
          style={styles.sendIcon}
        />
        </TouchableOpacity>
        </View>
        <View>
        
        </View>
        

  </View>

  );
}

const styles = StyleSheet.create({
 
inputContainer :{
  padding: 20,
  flexDirection: "row",
  backgroundColor: colors.background,
  justifyContent: "space-between",
  alignItems: "center",
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20
},
inputSection: {
  marginLeft: 5,
  marginRight: 5,
  paddingVertical: 1,
  width: '100%',
  height: windowHeight/12,
  flexDirection: "row",
  justifyContent: "space-between",
  backgroundColor: '#fff',
  borderColor: '#bbb',
  borderWidth: 1,
  borderStyle: "dashed",
  borderRadius: 1,
  marginBottom: 5,
  alignItems: "center",
},
addInput: {
  flex: 1,
  height : windowHeight/16,
  paddingTop: 1,
  paddingRight: 10,
  paddingBottom: 2,
  paddingLeft: 10,
  fontSize: 16,
  color: '#000',
},
sendIcon:{
  //backgroundColor:'grey',
  color: '#030430',
  paddingLeft: 5,
  paddingRight: 5
},
searchIcon: {
color: colors.white, 
paddingLeft: 10 
},
addTodoIcon:{
  height: windowHeight/18,
   backgroundColor:'#fff'
}
})