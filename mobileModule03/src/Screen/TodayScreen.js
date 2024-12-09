import { StyleSheet, Text, View, FlatList, Image} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import WindIcon from "../../assets/WeatherIcons/windIcon.svg"

export default function TodayScreen({ error, location, todayWeather }) {
	const renderWeatherItem = ({ item }) => (
		<View style={styles.weatherItem}>
			<Text style={[styles.weatherText, {fontSize: 20, marginBottom: 20} ]}>{item.hour}</Text>
			<Image source={item.weatherImage} style={{ width:50, height: 50}} ></Image>
			<View style={{flexDirection: 'row', alignItems: 'flex-start', marginBottom: 20, marginTop: 2}}>
				<Text style={[styles.weatherText, {fontSize: 30}]}>{item.temperature}<Text style={{fontSize: 15}}>°C</Text></Text>
			</View>
			<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
				<WindIcon width={16} height={16} />
				<Text style={[styles.weatherText, {fontSize: 15, marginLeft: 5}]}>{item.windspeed} <Text style={{fontSize: 10 }}>km/h</Text></Text>
			</View>
		</View>
	);

	const labels = todayWeather.map((data, index) =>
		index % 3 === 0 ? data.hour : '' // Afficher le label toutes les 3 heures
	);
	const dataPoints = todayWeather.map((data) => data.temperature);
	return (
		<View style={styles.container}>
			{error.length > 0 ? (
				<View>
					<Text style={styles.errorText} >{error}</Text>
				</View>
			):(
				<>
					{location.city != '' && (
						<View style={{marginTop: 10, padding: 30}}>
							<Text style={styles.cityText} >{location.city}</Text>
							<Text style={styles.locateText}>{location.region ? `${location.region}, ` : ''}
							{location.country}</Text>
						</View>
					)}
					{!location.city && location.latitude != ''  && (
						<View style={{marginTop: 10, padding: 30}}>
							<Text style={styles.cityText}>{location.latitude}</Text>
							<Text style={styles.cityText}>{location.longitude}</Text>
						</View>
					)}
					{todayWeather.length > 1 && (
						<>
							<LineChart
								data={{
									labels: labels, // Les heures
									datasets: [
									{
									  data: dataPoints, // Les températures
									},
									],
								}}
								width={380} // Largeur du graphique
								height={200} // Hauteur du graphique
								yAxisSuffix="°C"
								chartConfig={{
								backgroundColor: "#e26a00",
								backgroundGradientFrom: "#fb8c00",
								backgroundGradientFromOpacity: 0,
								backgroundGradientToOpacity: 0,
								backgroundGradientTo: "#ffa726",
								decimalPlaces: 1,
								color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
								labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
								style: {
									borderRadius: 8,
								},
								propsForDots: {
									r: '2',
									strokeWidth: '2',
									stroke: '#99d6ea',
									fill: '#99d6ea',
								},
								}}
								style={{
									marginVertical: 30,
									borderRadius: 8,
									alignSelf: 'center'
								}}
							/>
							<FlatList
								data={todayWeather}
								horizontal
								renderItem={renderWeatherItem}
								keyExtractor={(item, index) => index.toString()}
								showsHorizontalScrollIndicator={true}
								style={{padding:5}}
							/>
						</>
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
	},
	cityText: {
		color: 'white',
		fontSize: 30,
		fontWeight: 200,
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
	weatherItem: {
		width: 100,
		height: 240,
		marginEnd: 10,
		borderRadius: 25,
		padding: 1,
		backgroundColor: '#333533',
		justifyContent: 'center',
		alignItems: 'center',
	},
	weatherText: {
		fontSize: 20,
		color: 'white',
		textAlign: 'center'
	},
});