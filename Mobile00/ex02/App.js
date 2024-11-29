import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={{color: "#ebebeb", fontSize: "20px"}}>
          Calculator
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3a6ea5',
  },
  appBar: {
    backgroundColor: "#004e98",
    height: "50px",
    justifyContent: 'center', // Centrer verticalement
    alignItems: 'center', // Centrer horizontalement
  }
});
