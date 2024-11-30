import { StyleSheet, Text, View } from 'react-native';

export default function TodayScreen({ screenText }) {
	return (
		<View style={styles.container}>
			<Text>Today</Text>
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