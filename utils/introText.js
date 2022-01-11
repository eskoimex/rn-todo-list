import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {colors} from './Colors';

export default function Header() {
  return (
    <View style={{ padding: 16 }}>
          <Text style={styles.header}>
            {"Hey! Organize your thoughts."}
          </Text>
          <Text style={styles.subHeader}>Get your priorities right.</Text>
        </View>
  );
}

const styles = StyleSheet.create({
  header: {
    color: colors.white, 
    fontSize: 22
  },
  subHeader: {
    color:'#a8c6f0'
  }
});