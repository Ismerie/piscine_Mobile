import { StyleSheet, Text, View, FlatList} from 'react-native';

export default function WeeklyScreen({error, location, weeklyWeather }) {
	const renderWeatherItem = ({ item }) => (
        <View style={styles.weatherItem}>
            <Text style={styles.weatherText}>{item.date}</Text>
            <Text style={styles.weatherText}>{item.minTemp}°C</Text>
            <Text style={styles.weatherText}>{item.maxTemp} km/h</Text>
            <Text style={styles.weatherText}>{item.weatherDescription}</Text>
        </View>
    );

	return (
		<View style={styles.container}>
			{location.city != '' && (
				<View style={{marginTop: 5}}>
					<Text style={styles.locateText} >{location.city}</Text>
					<Text style={styles.locateText} >{location.region}</Text>
					<Text style={styles.locateText} >{location.country}</Text>
				</View>
			)}
			{!location.city && location.latitude != ''  && (
				<View style={{marginTop: 5}}>
					<Text style={styles.locateText}>{location.latitude}</Text>
					<Text style={styles.locateText}>{location.longitude}</Text>
				</View>
			)}
			{weeklyWeather.length > 1 && (
                <FlatList
                    data={weeklyWeather}
                    renderItem={renderWeatherItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            )}
			{error != '' && (
				<View>
					<Text style={styles.errorText} >{error}</Text>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingEnd: 5,
		paddingLeft: 5,
	},
	locateText: {
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
    },
    errorText: {
        color: 'red',
    },
	weatherItem: {
        marginBottom: 15,
        padding: 10,
        backgroundColor: '#f5cb5c',
        borderRadius: 5,
        width: '100%',
		display: 'flex',
		flexDirection: "row",
		alignItems: 'center',
		justifyContent: 'center'
    },
    weatherText: {
        fontSize: 14,
        color: 'black',
		flex: 1,
		textAlign: 'center'
    },
});