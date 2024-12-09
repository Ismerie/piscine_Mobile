import React, { useEffect } from 'react';
import { Alert, TouchableOpacity, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import Icon from 'react-native-vector-icons/Ionicons';
import { getWeather } from './Utils/getWeather'

export default function GeolocationButton({setError, setLocation, pos, setCurrentWeather, setTodayWeather, setWeeklyWeather}) {
    const emptyLocationAndError = () => {
        setError('');
    }

    const requestLocationPermission = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status === 'granted') {
            return true;
        } else if (status === 'denied') {
            setError('Geolocation is not available, please enable it in your App settings');
            return false;
        } else {
            return false;
        }
    };

    const getLocation = async () => {
        emptyLocationAndError();

        const hasPermission = await requestLocationPermission();
        if (!hasPermission) {
            setError('Geolocation is not available, please enable it in your App settings');
            return;
        }

        try {
            const locationRes = await Location.getCurrentPositionAsync({
            });

            const { latitude, longitude } = locationRes.coords;

            const newLocation = {
                city: '',
            region: '',
            country: '',
            latitude: latitude,
            longitude: longitude,
            };

            setLocation(newLocation);

            
            getWeather(newLocation, setCurrentWeather, setTodayWeather, setWeeklyWeather, setError);
        } catch (error) {
            console.log(error)
            setError("Could not fetch your location. Please try again.");
        }
    };

    useEffect(() => {
        getLocation();

    }, []);

    return (
        <TouchableOpacity style={styles.button} onPress={getLocation}>
            <Icon name="navigate" size={24} color="#f5cb5c" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 50,
    },
});
