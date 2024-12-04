import { StyleSheet, Text, View } from 'react-native';

export default function CurentlyScreen({ screenText }) {
	return (
		<View style={styles.container}>
			<Text>Currently</Text>
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