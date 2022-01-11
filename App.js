import React, {  useState } from 'react';
import { View,  StatusBar,StyleSheet, FlatList, Alert} from "react-native";
import TodoItem from './components/readTodo';
import AddTodo from './components/createTodo';
import Header from './utils/header';
import IntroText from './utils/introText';
import SearchTodoItems from './utils/searchTodoItems';
import ButtonToggleGroup from 'react-native-button-toggle-group';
import {colors} from './utils/Colors';


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
    if (search) {
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
      setTodos(filteredDataSource);
      setSearch(search);
    }
  };


  const getTask = (val) => {
    setValue(val)
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.themeColor
      }}
    >
      <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
      <View style={{ backgroundColor: colors.themeColor }}>
        <Header />
        <SearchTodoItems searchFilterFunction={searchFilterFunction} />
        <IntroText />
      </View>
    

      <AddTodo addTodo={addTodo} />
      <View  style={{
        flex: 1,
        backgroundColor: colors.background
      }}>
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

         <ButtonToggleGroup
              highlightBackgroundColor={'blue'}
              highlightTextColor={'white'}
              inactiveBackgroundColor={'transparent'}
              inactiveTextColor={'grey'}
              values={['Active', 'Completed']}
              value={value}
             onSelect={getTask}
          />  
          </View>     
    </View>
  );
}


const styles = StyleSheet.create({
  errorMsg: {
    flex:1,
    marginLeft: 5,
    marginRight: 5,
    paddingVertical: 1,
    width: '50%',
    height: 15,
    backgroundColor: 'red',
    borderColor: 'red',
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    marginBottom: 5,
    alignItems: "center",
  },

});