import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
// import { SearchBar } from 'react-native-elements';

const Banner = () =>{
    const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
    return(
        <View>
            <Image style={styles.imageBig} source={require('../assets/images/hinh1.jpg')} />
            <Image style={styles.avatar} source={require('../assets/images/hinh2.png')} />
            <Text style={styles.title_banA}>Hi, Duong {' \n'} Welcome to Fruit Store</Text>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
        </View>
        
    )
};

const styles = StyleSheet.create({
    imageBig: {
        backgroundColor: "black",
        opacity: 0.5,
        width: "100%",
        height: 303,
        borderRadius: 40,
        marginTop: -80,
        position: 'relative',
    },
    avatar:{
        width:50,
        height:50,
        borderRadius: 50,
        position: 'absolute',
        marginTop: 15,
        marginLeft:20,
        opacity: 1,
    },
    title_banA:{
        color: "black",
        fontSize: 25,
        position: 'absolute',
        marginTop: 70,
        marginLeft: 70,
        textAlign: 'center',

    }
})

export default Banner;