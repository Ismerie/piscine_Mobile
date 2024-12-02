import { StyleSheet, Text, View } from 'react-native';

export default function WeeklyScreen({ screenText }) {
	return (
		<View style={styles.container}>
			<Text>Weekly</Text>
			<Text>{screenText}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});