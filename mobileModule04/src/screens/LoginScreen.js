
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';


WebBrowser.maybeCompleteAuthSession();


export default function LoginScreen() {
	const navigation = useNavigation();
	

		
	const config = {
		webClientId: "185254127656-bii9auuotum2oum3qcpolpeotj3i93om.apps.googleusercontent.com",
		androidClientId: "185254127656-6egkosral8gphgu1p5c1jsn01om5nlki.apps.googleusercontent.com",
		useProxy: true
	}

	const [request, response, promptAsync] = Google.useAuthRequest(config)

	const handleToken = () => {
		if (response?.type === "success") {
			const {authentication} = response;
			const token = authentication?.accessToken;
			console.log("access token", token)
			navigation.navigate('Home', { token: authentication.accessToken });
		}
	}

	useEffect(() => {
	handleToken();
	}, [response])

	

	return (
        <>
			<Text style={styles.title}>Open your <Text style={{color: '#f7a072'}}>Diary</Text></Text>
			<TouchableOpacity style={styles.buttonLogin} onPress={() => {promptAsync();}} >
				<Text style={styles.fontButton}>Login</Text>
			</TouchableOpacity>
        </>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	title: {
		fontSize: 50,
		textAlign: 'start',
		marginBottom: 20,
	},
	buttonLogin: {
		position: 'absolute',
		bottom: 30,
		backgroundColor: '#eddea4',
		padding: 15,
		borderRadius: 10,
		width: '100%'

	},
	fontButton: {
		fontSize: 30,
		textAlign: 'center'
	},
	backgroundImage: {
        flex: 1,
    }
});

