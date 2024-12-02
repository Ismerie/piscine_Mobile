import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() { 
	function handleButton(value) {
		console.log(`Button pressed: ${value}`);
	}

	return (
		<View style={styles.container}>
			<View style={[styles.appBar, {flex: 1}]}>
				<Text style={{color: "#ebebeb", fontSize: "80%"}}>
				Calculator
				</Text>
			</View>
			<View style={{flex: 3, justifyContent: 'space-between'}}>
				<Text style={[styles.textField, {marginTop: 5, marginBottom: 100}] }>0</Text>
				<Text style={[styles.textField, {marginBottom: 5, backgroundColor: '#ffffff20'}] }>0</Text>
			</View>
			<View style={{flex: 3, justifyContent: 'flex-end'}}>
				<View style={styles.buttonRow}>
					<TouchableOpacity style={styles.button} onPress={() => handleButton('7')}>
						<Text style={styles.buttonTextNumber}>7</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => handleButton('8')}>
						<Text style={styles.buttonTextNumber}>8</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => handleButton('9')}>
						<Text style={styles.buttonTextNumber}>9</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => handleButton('C')}>
						<Text style={styles.buttonTextLetter}>C</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => handleButton('AC')}>
						<Text style={styles.buttonTextLetter}>AC</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.buttonRow}>
					<TouchableOpacity style={styles.button} onPress={() => handleButton('4')}>
						<Text style={styles.buttonTextNumber}>4</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => handleButton('5')}>
						<Text style={styles.buttonTextNumber}>5</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => handleButton('6')}>
						<Text style={styles.buttonTextNumber}>6</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => handleButton('+')}>
						<Text style={styles.buttonTextSign}>+</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => handleButton('-')}>
						<Text style={styles.buttonTextSign}>-</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.buttonRow}>
					<TouchableOpacity style={styles.button} onPress={() => handleButton('1')}>
						<Text style={styles.buttonTextNumber}>1</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => handleButton('2')}>
						<Text style={styles.buttonTextNumber}>2</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => handleButton('3')}>
						<Text style={styles.buttonTextNumber}>3</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => handleButton('*')}>
						<Text style={styles.buttonTextSign}>*</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => handleButton('/')}>
						<Text style={styles.buttonTextSign}>/</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.buttonRow}>
					<View style={{flex: '1', margin: 3}}></View>
					<TouchableOpacity style={styles.button} onPress={() => handleButton('0')}>
						<Text style={styles.buttonTextNumber}>0</Text>
					</TouchableOpacity>
					<View style={{flex: '1', margin: 3}}></View>
					<TouchableOpacity style={styles.button} onPress={() => handleButton('.')}>
						<Text style={styles.buttonTextSign}>.</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.buttonEgal} onPress={() => handleButton('=')}>
						<Text style={styles.buttonTextSignEgal}>=</Text>
					</TouchableOpacity>
				</View>
			</View>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 7,
		backgroundColor: '#3a6ea5',
		fontSize: 50,
	},
	appBar: {
		backgroundColor: "#004e98",
		height: "10%",
		justifyContent: 'center',
		alignItems: 'center',
	},
	textField: {
		color: '#c0c0c0',
		textAlign: 'right',
		fontSize: "80%",
		padding: 10,
		borderRadius: 5,
		
	},
	buttonRow: {
		dislay: 'flex',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		bottom: '0',
	},
	button: {
		borderRadius: 30,
		backgroundColor: '#004E98',
		flex: '1',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 3,
	},
	buttonEgal: {
		borderRadius: 30,
		backgroundColor: '#FF6700',
		flex: '1',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 3,
	},
	buttonTextNumber: {
		fontSize: '80%',
		padding: '5px',
		color: '#ebebeb',
	},
	buttonTextSign: {
		fontSize: '80%',
		padding: '5px',
		color: '#ff6700',
	},
	buttonTextSignEgal: {
		fontSize: '80%',
		padding: '5px',
		color: '#ebebeb',
	},
	buttonTextLetter: {
		fontSize: '80%',
		padding: '5px',
		color: '#c0c0c0',
	},
});
