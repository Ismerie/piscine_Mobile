import React, { useState } from 'react';
import { StyleSheet, TextInput, View, SafeAreaView, Text } from 'react-native';
import BottomBar from './BottomBar';
import SearchBar from './SearchBar';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import GeolocationButton from './GeolocationButton';

export default function App() {
    const [myLocation, setMyLocation] = useState('');
	const [error, setError] = useState(false);
    const [location, setLocation] = useState({
        city: '',
        region: '',
        country: '',
    })
        
    console.log(location)

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topBar}>
                <Icon name="search-outline" size={24} color="#e8eddf" />
                <SearchBar setMyLocation={setMyLocation} setError={setError} setLocation={setLocation}/>
                <GeolocationButton setMyLocation={setMyLocation} setError={setError} setLocation={setLocation}/>
            </View>
            <NavigationContainer>
                <BottomBar myLocation={myLocation} error={error} location={location} />
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
        position: 'relative', // Permet d'utiliser `absolute` pour les enfants
        zIndex: 1,
    },

});
