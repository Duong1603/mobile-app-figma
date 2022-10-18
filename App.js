/* eslint-disable quotes */
import React from 'react';
import type {Node} from 'react';
import {View} from 'react-native';
// import BannerComponent from "./components/Banner";
import BannerComponent from './components/Banner';

const App: () => Node = () => {
  return (
    <View>
      <BannerComponent />
    </View>
  );
};

export default App;
