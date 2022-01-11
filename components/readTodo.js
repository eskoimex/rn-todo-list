import React, { useState } from 'react';
import {StyleSheet, View, Text, TextInput, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../utils/Colors';

export default function TodoItem({ item, completedTodo, deleteTodo, editTodo }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState('');

  const updateHandler = (editedTask) => {
    console.log(editedTask)
    setEditedTask(editedTask);
  };
    return (
  //   <View styles={{flex: 1,flexDirection: 'row', justifyContent:'space-between'}}>
  //   <Icon
  //    onPress={() =>
  //     completedTodo(item.id, 'isCompleted', !item.isCompleted)
  //   }
  //     type='FontAwesome5'
  //     name={!item.isCompleted ? 'square' : 'check-square'}
  //     style={{ fontSize: 14 }}
  //   />
  //     {!isEditMode ? 
  //        <Text style={styles.item}> {item.task} </Text>            
  //                  : 
  //                  <View>
  //                       <TextInput 
  //                       placeholder='edit todo...'  
  //                       onChangeText={updateHandler}  
  //                       value={editedTask} 
  //                       onSubmitEditing={()=> editTodo(editedTask, item.id, 'task', isEditMode, setIsEditMode)}

  //                     /> 
  //                   </View>                         
  //         }
  //   <Icon
  //    onPress={() => setIsEditMode(true)}
    
  //     type='FontAwesome5'
  //     name='edit'
  //     style={{ fontSize: 14 }}
  //   />
  //   <Icon
  //    onPress={() =>
  //     deleteTodo(item.id)
  //   }
  //     type='FontAwesome5'
  //     name='trash-alt'
  //     style={{ fontSize: 14 }}
  //   />
  //  </View>
  <ScrollView
        style={{
          backgroundColor: colors.background
        }}
      >
    <View
      style={styles.todoContainer}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
     <Icon
     onPress={() =>
      completedTodo(item.id, 'isCompleted', !item.isCompleted)
    }
      type='FontAwesome5'
      color='#030430'
      name={!item.isCompleted ? 'square' : 'check-square'}
      style={{ fontSize: 14 }}
    />
        <View>
            {!isEditMode ? 
          <Text style={{ fontSize: 15, paddingLeft: 10 }}>{item.task}</Text>
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
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <MaterialCommunityIcons
         onPress={() => setIsEditMode(true)}
          name="pencil"
          size={16}
          style={{ color: '#030430' }}
        />
        <MaterialCommunityIcons
        onPress={() => deleteTodo(item.id) }
          name="trash-can"
          size={16}
          style={{ color: '#030430', marginLeft: 5 }}
        />
      </View>
    </View>
</ScrollView>    
  )
}

const styles = StyleSheet.create({
  todoContainer:{
    backgroundColor: colors.white,
    flexDirection: "row",
    marginHorizontal: 16,
    marginVertical: 4,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "space-between"
  },
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