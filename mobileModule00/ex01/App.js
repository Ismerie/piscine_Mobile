import React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
	
	const [buttonPressed, setButtonPressed] = useState(true)

	function handlePress() {
		console.log("Button pressed")
		setButtonPressed(prevState => !prevState)
	}

	return (
		<View style={styles.container}>
			<Text style={styles.text}>
				{buttonPressed ? "A simple text" : "Hello World!" }
			</Text>
			<Button 
				title="Click me"
				color = "#c8b6ff"
				onPress={handlePress}
				accessibilityLabel="Boutton to change text"
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
		borderRadius: 5
	}
});
