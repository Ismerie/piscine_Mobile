import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function CurentlyScreen({error, location, currentWeather }) {

	return (
		<View style={styles.container}>
			{error && error != '' ?(
				<View>
					<Text style={styles.errorText} >{error}</Text>
				</View>
			):(
				<>
					{location?.city != '' && (
						<View>
							<Text style={styles.locateText}>{location.city}</Text>
							<Text style={styles.locateText}>{location.region}</Text>
							<Text style={styles.locateText}>{location.country}</Text>
						</View>
					)}
					{!location?.city && location?.latitude != ''  && (
						<View style={{marginTop: 5}}>
							<Text style={styles.locateText}>{location.latitude}</Text>
							<Text style={styles.locateText}>{location.longitude}</Text>
						</View>
					)}
					{currentWeather?.temp != '' && (
						<View style={{marginTop: 5}}>
							<Text>{currentWeather.temp }°C</Text>
							<Text>{currentWeather.windSpeed } km/h</Text>
							<Text>{currentWeather.weatherDescription }</Text>
						</View>
					)}
				</>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
	},
	locateText: {
		fontSize: 16,
		color: 'black',
		textAlign: 'center',
	},
	errorText: {
		color: 'red',
		textAlign: 'center',
	},
});