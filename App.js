import React, { useState } from "react";
import
{
	Image, SafeAreaView, View, StyleSheet, ScrollView, Text, StatusBar, Dimensions
} from "react-native";

const images = [
	'https://vieclam.thegioididong.com/uploads/img/news/357/thumb---banner-la-gi_-kich-thuoc-tieu-chuan-va-cach-thiet-ke-banner-thu-hut-.jpg',
	'https://www.befunky.com/images/prismic/3098960f-8570-4f4d-81bd-699a07905345_OG-banner-maker2.png?auto=avif,webp&format=jpg&width=full',
	'https://intphcm.com/data/upload/banner-quang-cao.jpg'
]

const WIDTH = Dimensions.get('window').width;
const HEIGH = Dimensions.get('window').height;

const App = () =>
{
	const [imgActive, setimgActive] = useState(0);

	// onchange = {nativeEvent} => {

	// }
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.wrap}>
				<ScrollView
					onScroll={({ nativeEv1ent }) => onchange(nativeEvent)}
					showsHorizontalScrollIndicator={false}
					pagingEnabled
					horizontal
					style={styles.wrap}
				>{
						images.map((e, index) =>
							<Image
								key={e}
								resizeMode='stretch'
								style={styles.wrap}
								source={{ uri: e }}
							/>
						)
					}

				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	wrap: {
		width: WIDTH,
		height: HEIGH * 0.25,
	}
});

export default App;
