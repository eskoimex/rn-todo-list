import React from 'react';
import { View, TextInput } from 'react-native';

export default function SearchTodoItems({ searchFilterFunction, search }) {

  return (
    <View>
       <TextInput
          // style={styles.textInputStyle}
          onChangeText={searchFilterFunction} 
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
    </View>
  );
}
