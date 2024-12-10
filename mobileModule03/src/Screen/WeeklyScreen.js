import { StyleSheet, Text, View, FlatList, Image, ScrollView} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import WindIcon from "../../assets/WeatherIcons/windIcon.svg"

export default function WeeklyScreen({error, location, weeklyWeather }) {
	const renderWeatherItem = ({ item }) => (
		<View style={styles.weatherItem}>
			<Text style={[styles.weatherText, {fontSize: 20, marginBottom: 20} ]}>{item.date}</Text>
			<Image source={item.weatherImage} style={{ width:50, height: 50}} ></Image>
			<View style={{flexDirection: 'row', alignItems: 'flex-start', marginTop: 15}}>
				<Text style={[styles.weatherText, {fontSize: 25, color: '#ff5a5f'}]}>{item.maxTemp}<Text style={{fontSize: 15}}>°C <Text style={{fontSize: 10}}>max</Text></Text></Text>
			</View>
			<View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
				<Text style={[styles.weatherText, {fontSize: 25, color: '#99D6EA'}]}>{item.minTemp}<Text style={{fontSize: 15}}>°C <Text style={{fontSize: 10}}>min</Text></Text></Text>
			</View>
		</View>
	);

	const labels = weeklyWeather.map((data) => data.date);
	const dataPointsMin = weeklyWeather.map((data) => data.minTemp);
	const dataPointsMax = weeklyWeather.map((data) => data.maxTemp);
	return (
		<ScrollView style={styles.container}>
		{error && error.length > 0 ? (
			<View>
				<Text style={styles.errorText} >{error}</Text>
			</View>
		):(
			<>
				{location?.city != '' && (
					<View style={{marginTop: 10, padding: 30}}>
						<Text style={styles.cityText} >{location.city}</Text>
						<Text style={styles.locateText} >{location.region}</Text>
						<Text style={styles.locateText} >{location.country}</Text>
					</View>
				)}
				{!location?.city && location.latitude != ''  && (
					<View style={{marginTop: 10, padding: 30}}>
					<Text style={styles.cityText}>At home</Text>
					</View>
				)}
				{weeklyWeather?.length > 1 && (
						<>
							<LineChart
								data={{
									labels: labels, // Les heures
									datasets: [
									{
									  	data: dataPointsMin, // Les températures
									  	color: (opacity = 1) => `rgba(30, 150, 252, ${opacity})`, // Couleur pour ce dataset
									},
									{
										data: dataPointsMax,
										color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // Couleur pour ce dataset
									}],
								}}
								width={380}
								height={200}
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
								propsForBackgroundLines: {
									strokeWidth: 0,
								},
								propsForDots: {
									r: '2',
									strokeWidth: '2',
									stroke: '#fdf8e1',
									fill: '#fdf8e1',
								},
								}}
								style={{
									marginVertical: 15,
									borderRadius: 8,
									alignSelf: 'center',
								}}
							/>
							<FlatList
								data={weeklyWeather}
								horizontal
								renderItem={renderWeatherItem}
								keyExtractor={(item, index) => index.toString()}
								showsHorizontalScrollIndicator={true}
								style={{padding:5, marginTop: 20, alignSelf: 'center'}}
							/>
						</>
					)}
			</>
		)}
		</ScrollView>
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
		ontSize: 20,
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