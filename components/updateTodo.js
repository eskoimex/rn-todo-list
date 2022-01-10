import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function AddTodo({ addTodo }) {
  [task, setTask] = useState('');

  const changeHandler = (val) => {
    setTask(val);
  };

  return (
    <View>
      <TextInput 
        style={styles.input} 
        placeholder='new todo...'
        onChangeText={changeHandler} 
        value={task} 
      />
      <Button color='coral' onPress={() => addTodo(task)} title='add todo' />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});