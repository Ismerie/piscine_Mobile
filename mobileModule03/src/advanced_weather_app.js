import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, SafeAreaView, Text, ImageBackground } from 'react-native';
import BottomBar from './BottomBar';
import SearchBar from './SearchBar';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import GeolocationButton from './GeolocationButton';
import { StatusBar } from 'react-native';
import { BackHandler, Platform } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';

export default function App() {
	const [error, setError] = useState("");
    const [location, setLocation] = useState({
        city: '',
        region: '',
        country: '',
        latitude: '',
        longitude: '',
    })
    const [currentWeather, setCurrentWeather] = useState({
        temp: '',
        weatherDescription: '',
        windSpeed: '',
        weatherImage: ''
    })
    const [todayWeather, setTodayWeather] = useState([{
        hour: '',
        temperature: '',
        weatherDescription: '',
        windspeed: '',
        weatherImage: ''
    }])
    const [weeklyWeather, setWeeklyWeather] = useState([{
        date: '',
        minTemp: '',
        maxTemp: '',
        weatherDescription: '',
        weatherImage: ''
    }])


    useEffect(() => {
        if (Platform.OS != 'web') {
            NavigationBar.setVisibilityAsync('hidden');
            NavigationBar.setBackgroundColorAsync('transparent');
            NavigationBar.setBehaviorAsync('overlay-swipe');
        }
    }, []);
    

    return (
        <ImageBackground
            source={require('../assets/sun3.jpg')}
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.topBar}>
                    <Icon name="search-outline" size={24} color="#e8eddf" />
                    <SearchBar  
                        setError={setError} 
                        setLocation={setLocation}
                        setCurrentWeather={setCurrentWeather}
                        setTodayWeather={setTodayWeather}
                        setWeeklyWeather={setWeeklyWeather}
                        />
                    <GeolocationButton 
                        setError={setError} 
                        setLocation={setLocation}
                        setCurrentWeather={setCurrentWeather}
                        setTodayWeather={setTodayWeather}
                        setWeeklyWeather={setWeeklyWeather}
                    />
                </View>
                <NavigationContainer>
                    <BottomBar 
                        error={error} 
                        location={location} 
                        currentWeather={currentWeather} 
                        todayWeather={todayWeather}
                        weeklyWeather={weeklyWeather}    
                    />
                                
                </NavigationContainer>
                <StatusBar hidden={true} />
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topBar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#242423',
        paddingLeft: 10,
		paddingEnd: 10,
		paddingBottom: 25,
		paddingTop: 50,
        position: 'relative', // Permet d'utiliser `absolute` pour les enfants
        zIndex: 1,
    },
    backgroundImage: {
        flex: 1,
    }
});
