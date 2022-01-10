import React from 'react';
import { View } from 'react-native';
import ButtonToggleGroup from 'react-native-button-toggle-group';

export default function toggleButtons({ value, getTask }) {

  return (
    <View>
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
  );
}
