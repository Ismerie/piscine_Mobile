import { StyleSheet, Text, View, Image } from 'react-native';
import WindIcon from "../../assets/WeatherIcons/windIcon.svg"

export default function CurentlyScreen({error, location, currentWeather }) {
	return (
		<View style={styles.container}>
			{error != '' ?(
				<View>
					<Text style={styles.errorText} >{error}</Text>
				</View>
			):(
				<>
					{location.city != '' && (
						<View style={{marginTop: 10}}>
							<Text style={styles.cityText}>{location.city}</Text>
							<Text style={styles.locateText}>{location.region ? `${location.region}, ` : ''}
							{location.country}</Text>
						</View>
					)}
					{!location.city && location.latitude != ''  && (
						<View style={{marginTop: 10}}>
							<Text style={styles.cityText}>{location.latitude}</Text>
							<Text style={styles.cityText}>{location.longitude}</Text>
						</View>
					)}
					{currentWeather.temp != '' && (
						<View style={{marginTop: 30}}>
							<View style={[styles.dataWeather, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
								<View style={{ flexDirection: 'row', alignItems: 'flex-start'}}>
									<Text style={{ fontSize: 80, color: 'white', marginLeft: 2, fontWeight: 600}}>{currentWeather.temp }</Text>
									<Text style={{ fontSize: 30, color: 'white', marginLeft: 2, marginTop: 12}}>°C</Text>
								</View>
								<View style={{ flexDirection: 'row', alignItems: 'flex-end'}}>
									<WindIcon style={{ marginBottom: 4}} width={30} height={30} />
									<Text style={{ fontSize: 30, color: 'white', marginLeft: 2, marginTop: 12}}>{currentWeather.windSpeed }</Text>
									<Text style={{ fontSize: 15, color: 'white', marginLeft: 2, marginTop: 12, marginBottom: 6}}>km/h</Text>
								</View>
							</View>
							<View style={styles.descriptionContainer}>
								<Image source={currentWeather.weatherImage} style={{ width:200, height: 200}} ></Image>
								<Text style={{ fontSize: 30, color: 'white', marginLeft: 2, marginTop: 5}} >{currentWeather.weatherDescription}</Text>
							</View>
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
		backgroundColor: 'rgba(0, 0, 0, 0.5 )',
		padding : 30,
	},
	locateText: {
		fontSize: 20,
		color: '#dee2e6',
		marginTop: 7,
		fontWeight: 200,
	},
	errorText: {
		color: 'red',
		textAlign: 'center',
	},
	cityText: {
		color: 'white',
		fontSize: 30,
		fontWeight: 200,
	},
	tempText: {
		color: 'white',
		fontSize: 80,
		fontWeight: '100'
	},
	dataWeather: {
	}, 
	descriptionContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 20
	}
});