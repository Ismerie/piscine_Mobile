import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';
import { BackHandler, Platform } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import React, { useState, useEffect } from 'react';

import AppNavigator from './src/AppNavigator';


export default function App() {
	

	useEffect(() => {
        if (Platform.OS != 'web') {
            NavigationBar.setVisibilityAsync('hidden');
            NavigationBar.setBackgroundColorAsync('transparent');
            NavigationBar.setBehaviorAsync('overlay-swipe');
        }
    }, []);

	return (
		<ImageBackground
			source={require('./assets/diary.jpg')}
            style={styles.backgroundImage}
            resizeMode="cover"
		>
			<SafeAreaView style={styles.container}>
				<AppNavigator/>
			</SafeAreaView>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	backgroundImage: {
        flex: 1,
    }
});

