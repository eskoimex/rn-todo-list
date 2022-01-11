import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard, TextInput } from 'react-native';
import Header from './utils/header';
import TodoItem from './components/readTodo';
import AddTodo from './components/createTodo';
////////////////
import SearchTodoItems from './utils/searchTodoItems';
import ButtonToggleGroup from 'react-native-button-toggle-group';
// import ToggleTodoStatus from './utils/toggleButtons';

export default function App() {
  const [todos, setTodos] = useState([
    { task: 'learn programming', isCompleted:false, id: '1' },
    { task: 'show sombody love', isCompleted: false, id: '2' },
  ]);
const [filteredDataSource, setFilteredDataSource] = useState(todos);
const [search, setSearch] = useState('');
const [value, setValue] = useState('Light');


  const deleteTodo = (id) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id != id);
    });
  };


  const editTodo = async (editedTask, id, key, isEditMode, setIsEditMode) => {
      try {

            const copyArray = todos.map((todo) => {
                return todo.id === id ? { ...todo, isCompleted:false, [key]: editedTask } : todo;
            })
            setTodos(copyArray)
            setIsEditMode(false)
        
      } catch (error) {
        console.log(error)
       }
   
  };

  const completedTodo = async (id, key, value) => {
    try {
      const copyArray = todos.map(todo =>
        todo.id === id ? { ...todo, [key]: value } : todo
      )
      console.log(copyArray)
      setTodos(copyArray)

    } catch (error) {
      console.log(error)
     }
  }
  

  const addTodo = (task) => {
    if(task.length > 3){
      setTask('');
      setTodos(prevTodos => {
        return [
          { task, isCompleted:false, id: Math.random().toString() },
          ...prevTodos
        ];
      });
    } else {
      Alert.alert('OOPS', 'Todo must be over 3 characters long', [
        {text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
  };


  const searchFilterFunction = (search) => {
    // Check if searched search is not blank
    if (search) {
      // Inserted search is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = todos.filter(
        function (item) {
          const itemData = item.task
            ? item.task.toUpperCase()
            : ''.toUpperCase();
          const textData = search.toUpperCase();
          return itemData.indexOf(textData) > -1;
      });
      setTodos(newData);
      setSearch(search);
    } else {
      // Inserted task is blank
      // Update FilteredDataSource with masterDataSource
      setTodos(filteredDataSource);
      setSearch(search);
    }
  };


  const getTask = (val) => {
    console.log(val)
    setValue(val)
  
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>

          <ButtonToggleGroup
              highlightBackgroundColor={'blue'}
              highlightTextColor={'white'}
              inactiveBackgroundColor={'transparent'}
              inactiveTextColor={'grey'}
              values={['Active', 'Completed']}
              value={value}
             onSelect={getTask}
          />
          {/* <ToggleTodoStatus getTask={getTask} /> */}

          <SearchTodoItems searchFilterFunction={searchFilterFunction} />

        <AddTodo addTodo={addTodo} />
          <View style={styles.list}>
            <FlatList
              data =   {  
                        value === 'Active' ? 
                             todos.filter(todo => todo.isCompleted === false) 
                        : 
                        value === 'Completed' ?
                             todos.filter(todo => todo.isCompleted === true) 
                              :
                             todos.filter(todo => todo.isCompleted === false)
                        }
              renderItem={({ item }) => (
                <TodoItem item={item} completedTodo={completedTodo} deleteTodo={deleteTodo} editTodo={editTodo}/>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});