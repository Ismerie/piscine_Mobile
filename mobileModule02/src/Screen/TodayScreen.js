import { StyleSheet, Text, View } from 'react-native';

export default function TodayScreen({ myLocation, error, location }) {
	console.log(typeof myLocation, myLocation);
	return (
		<View style={styles.container}>
			{location.city != '' && (
				<View>
					<Text>{location.city}</Text>
					<Text>{location.region}</Text>
					<Text>{location.country}</Text>
				</View>
			)}
			{myLocation!= '' && typeof myLocation === 'string' && (
				<View>
					<Text>{myLocation}</Text>
				</View>
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
	screenText: {
        fontSize: 16,
        color: 'black',
        marginTop: 20,
        textAlign: 'center',
    },
    errorText: {
        color: 'red',
    },
});