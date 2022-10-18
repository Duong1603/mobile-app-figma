import React, { Component } from 'react';
import{
	StyleSheet,
	View,
	Text,
	Image,
	Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper';


const { width } = Dimensions.get('window')

//Hiển thị số đếm lúc chuyển sang slide mới

const renderPagination = (index, total, context) =>
{
	return (
		<View style={styles.paginationStyle}>
			<Text style={{ color: 'grey' }}>
				<Text style={styles.paginationText}>{index + 1}</Text>/{total}
			</Text>
		</View>
	)
}
export default class App extends Component
{

	render()
	{
		return (
			<Swiper
				style={styles.wrapper}
				renderPagination={renderPagination}
				loop={false}
			>
				<View style={styles.slide} title={<Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}>
					<Image style={styles.image} source={require('./img/1.jpg')} />
				</View>
				<View style={styles.slide} title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}>
					<Image style={styles.image} source={require('./img/2.jpg')} />
				</View>
				<View style={styles.slide} title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}>
					<Image style={styles.image} source={require('./img/3.jpeg')} />
				</View>
				<View style={styles.slide} title={<Text numberOfLines={1}>Learn from Kim K to land that job</Text>}>
					<Image style={styles.image} source={require('./img/4.jpg')} />
				</View>
			</Swiper>
		);
	}
}
const styles = StyleSheet.create({
	wrapper: {},
	slide: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'transparent'
	},

	image: {
		width: "100px",
		flex: 1,
	}

});