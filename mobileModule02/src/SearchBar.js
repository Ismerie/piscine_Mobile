import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Keyboard, FlatList, TouchableOpacity, Text, Dimensions } from 'react-native';

const GeocodingAPI = "https://geocoding-api.open-meteo.com/v1/search?name="

export default function SearchBar({setMyLocation, setError, setLocation}) {
    const [inputText, setInputText] = useState('');
    const [suggestionsCities, setSuggestionsCities] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    const handleSearchSubmit = () => {
        setScreenText(inputText);
		setError(false);
        Keyboard.dismiss();
    };

    const getSuggestionsCities = async (searchCity) => {
        if (searchCity.length < 3) {
            setSuggestionsCities([])
            return
        }

        try {
            const res = await axios.get(`${GeocodingAPI}${searchCity}`);
            if (res.data.results)
            setSuggestionsCities(res.data.results)
            console.log(suggestionsCities);
        }
        catch (error) {
            console.error("Error fetching city suggestions", error)
        }
    }

    const handleCitySelect = (city) => {
        setMyLocation('');
        setSelectedCity(city);
        setInputText(city.name);
        setLocation({
            city: city.name,
            region: city.admin1,
            country: city.country
        });
        setSuggestionsCities([]);
    };

    useEffect(() => {
        const fetchSuggestions = async () => {
            console.log('a');
            if (inputText && selectedCity == '') {
                await getSuggestionsCities(inputText);
                if (suggestionsCities) {
                    console.log(suggestionsCities);
                }
            } else {
                setSuggestionsCities([]);
            }
        };
        fetchSuggestions();
    }, [inputText]);

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                value={inputText}
                onChangeText={setInputText}
                onSubmitEditing={handleSearchSubmit}
                placeholder="Search location..."
                placeholderTextColor="#888"
                onFocus={() => setSelectedCity('')}
            />
            {suggestionsCities.length > 0 && (
                <View style={styles.suggestionContainer}>
                    <FlatList
                        data={suggestionsCities}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.suggestionItem} onPress={() => handleCitySelect(item)}>
                                <Text style={styles.suggestionText}>
                                    {item.name}, { item.admin1}, {item.country}
                                </Text>
                            </TouchableOpacity>
                        )}
                        style={styles.suggestionsOverlay}
                    />
                </View>
            )}
        </View>
        
        
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        padding: 20,
    },
    button: {
        marginLeft: 10,
    },
    input: {
        padding: 5,
        backgroundColor: '#333533',
        borderRadius: 5,
        flex: 2,
        marginLeft: 5,
        marginRight: 25,
        color: '#e8eddf',
    },
    suggestionsOverlay: {
        position: 'absolute',
        backgroundColor: '#333533',
        zIndex: 5,
        borderTopWidth: 1,
        borderColor: '#ccc',
        width: "98%",
    },
    suggestionText: {
        fontSize: 16,
        color: '#e8eddf',
    },
    suggestionItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    suggestionsContent: {
        backgroundColor: '#fff',
    },
    suggestionContainer: {
        backgroundColor: "#2a9d8f",
        position: 'relative'
    }
});
