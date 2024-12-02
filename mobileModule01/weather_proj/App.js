import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import BottomBar from './BottomBar'
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {
	const [inputText, setInputText] = useState('');
	const [screenText, setScreenText] = React.useState('');

	function onPressGeolocation() {
		setScreenText("Geolocation")
	}

	function handleSearchSubmit() {
		setScreenText(inputText);
		Keyboard.dismiss();
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.topBar}>
				<Icon name="search-outline" size={24} color="#e8eddf"/>
				<TextInput 
					style={styles.input}
					value={inputText}
					onChangeText={setInputText}
					onSubmitEditing={handleSearchSubmit}
					placeholder="Search location..."/>
				<TouchableOpacity style={styles.button} onPress={onPressGeolocation}>
					<Icon name="navigate" size={24} color="#f5cb5c"/>
				</TouchableOpacity>
			</View>
			<NavigationContainer>
				<BottomBar screenText={screenText} />
			</NavigationContainer>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#c0c0c0',
	},
	topBar: {
		display: 'flex',
		flexDirection: 'row',
		width: '100%',
		height: '10%',
		alignItems: 'center',
		backgroundColor: '#242423',
		padding: 20,
	},
	input: {
		padding: 5,
		backgroundColor: '#333533',
		borderRadius: 5,
		flex: 2,
		marginLeft: '5px',
		marginRight: '25px',
		color: '#e8eddf',
	}
});
