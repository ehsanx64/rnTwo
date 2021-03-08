import React, { Component } from 'react';
import { View, Text } from 'react-native';

import AppScreen from '../../lib/AppScreen';

const HttpCat = ({ navigation }) => {
    return (
        <AppScreen nav={navigation} title="HTTP Cat" subTitle="HTTP vs. Cats">
            <Text>This is the simple page</Text> 
        </AppScreen>
    )
}

export default HttpCat;