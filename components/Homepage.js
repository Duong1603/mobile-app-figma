
import React from 'react';
import { View } from 'react-native';
import Banner from './Banner';
import Product_impotant from './Product_impotant';

const Homepage = () =>
{
    return (
        <View>
            <Banner />
            <View>
                <Product_impotant />
            </View>
        </View>
    );
}
export default Homepage;