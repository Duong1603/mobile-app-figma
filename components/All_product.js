import * as React from 'react';
import { FlatList, Text, View, StyleSheet, ScrollView, Image, SafeAreaView } from 'react-native';

const Item = ({ name, image }) =>
{
    return (
        <View style={styles.item}>
            <Image style={styles.imageCard} source={{ uri: image }} />
            <Text style={styles.titleCard}>{name}</Text>
        </View>
    );
}
export default function CardCreateCard()
{

    const allpr = [
        {
            id: '1',
            name: 'United States',
            image: 'https://i.pinimg.com/564x/37/39/45/373945978bff3b5c9b0dfe27382f0120.jpg'
        },
        {
            id: '2',
            name: 'United Kingdom',
            image: 'https://i.pinimg.com/564x/37/39/45/373945978bff3b5c9b0dfe27382f0120.jpg'
        },
        {
            id: '3',
            name: 'Israel',
            image: 'https://i.pinimg.com/236x/c6/7f/35/c67f352043ca8594324576106eab199c.jpg'
        },
        {
            id: '4',
            name: 'India',
            image: 'https://i.pinimg.com/236x/c6/7f/35/c67f352043ca8594324576106eab199c.jpg'
        },
        {
            id: '5',
            name: 'Nigeria',
            image: 'https://i.pinimg.com/236x/c6/7f/35/c67f352043ca8594324576106eab199c.jpg'
        },
        {
            id: '6',
            name: 'Uganda',
            image: 'https://i.pinimg.com/236x/c6/7f/35/c67f352043ca8594324576106eab199c.jpg'
        },
        {
            id: '7',
            name: 'Uganda',
            image: 'https://i.pinimg.com/236x/c6/7f/35/c67f352043ca8594324576106eab199c.jpg'
        },
        {
            id: '8',
            name: 'Uganda',
            image: 'https://i.pinimg.com/236x/c6/7f/35/c67f352043ca8594324576106eab199c.jpg'
        },

    ];

    const renderItem = ({ item }) => (
        <Item name={item.name} image={item.image} />
    );

    return (
        <View style={styles.cards}>
            <FlatList style={styles.card}
                numColumns={2}
                data={allpr}
                renderItem={renderItem}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#C0C0C0',
        padding: 10,
        borderRadius: 4,
        shadowColor: '#000',
        shadowRadius: 2,
        marginHorizontal: 10,
        marginVertical: 8,
    },
    imageCard: {
        width: 150,
        height: 150,
        marginBottom: 20,
        borderRadius: 20,
    },
    titleCard: {
        color: 'black',
        fontSize: 13,
        fontWeight: '400',
        backgroundColor: '#F7E8C9',
        borderRadius: 20,
        padding: 5,
    },
    scrollView: {
        marginHorizontal: 20,
    },
    cards: {
        alignItems: 'center',
    },

});