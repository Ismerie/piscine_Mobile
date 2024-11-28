import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  function handlePress() {
    console.log("Button pressed")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        A simple Text
      </Text>
      <Button 
        title="Click me"
        color = "#c8b6ff"
        onPress={handlePress}
        accessibilityLabel="Learn more about this purple button"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: '#bbd0ff',
    borderRadius: "5px"
  }
});
