import React, { useState } from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function TodoItem({ item, completedTodo, deleteTodo, editTodo }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState('');

  const updateHandler = (editedTask) => {
    console.log(editedTask)
    setEditedTask(editedTask);
  };
    return (
    <View styles={{flex: 1,flexDirection: 'row', justifyContent:'space-between'}}>
    <Icon
     onPress={() =>
      completedTodo(item.id, 'isCompleted', !item.isCompleted)
    }
      type='FontAwesome5'
      name={!item.isCompleted ? 'square' : 'check-square'}
      style={{ fontSize: 14 }}
    />
      {!isEditMode ? 
         <Text style={styles.item}> {item.task} </Text>            
                   : 
                   <View>
                        <TextInput 
                        placeholder='edit todo...'  
                        onChangeText={updateHandler}  
                        value={editedTask} 
                        onSubmitEditing={()=> editTodo(editedTask, item.id, 'task', isEditMode, setIsEditMode)}

                      /> 
                    </View>                         
          }
    <Icon
     onPress={() => setIsEditMode(true)}
    
      type='FontAwesome5'
      name='edit'
      style={{ fontSize: 14 }}
    />
    <Icon
     onPress={() =>
      deleteTodo(item.id)
    }
      type='FontAwesome5'
      name='trash-alt'
      style={{ fontSize: 14 }}
    />
  </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderRadius: 10,
  }
});