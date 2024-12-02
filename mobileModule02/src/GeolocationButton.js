import React from 'react';
import { useEffect } from 'react';
import { TouchableOpacity, PermissionsAndroid, Platform, StyleSheet } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Icon from 'react-native-vector-icons/Ionicons';

export default function GeolocationButton({ setMyLocation, setError, setLocation }) {
    const requestLocationPermission = async () => {
        if (Platform.OS === 'android') {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: "Location Permission",
                    message: "This app requires access to your location",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        }
        return true;
    };

    const getLocation = async () => {
        setLocation({
            city: '',
            region: '',
            country: '',
        })
        const hasPermission = await requestLocationPermission();
        if (!hasPermission) {
            setScreenText('Geolocation is not available, please enable it in your App settings');
            setError(true);
            return;
        }

        Geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setMyLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
                setError(false);
            },
            (error) => {
                console.error(error.message);
                setError(true);
                setScreenText('Geolocation is not available, please enable it in your App settings');
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
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
        marginLeft: 10,
    },
});
