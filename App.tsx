import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions, TextInput } from 'react-native';
import MyCar from './MyCar';

const { width, height } = Dimensions.get('window');

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MyCar></MyCar>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 16,
  },
});
