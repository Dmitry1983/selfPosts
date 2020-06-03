import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'

const App = () => {
	const { view, text, viewSafe } = styles
	return (
		<SafeAreaView style={viewSafe}>
			<View style={view}>
				<Text style={text}>APP</Text>
			</View>
		</SafeAreaView>
	)
}

export default App

const styles = StyleSheet.create({
	view: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'grey',
	},
	viewSafe: {
		flex: 1,
		//alignItems: 'center',
		//justifyContent: 'center',
		//backgroundColor: 'grey',
	},
	text: {
		fontSize: 80,
		color: 'white',
	},
})
