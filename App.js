import React from 'react';
// import { Text } from 'react-native';
import AppLoading from 'expo-app-loading';
// import {
//     Container, Content, Title, Body,
//     Header, Left, Right, Icon, Button
// } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import Home from './src/screens/Home/Home';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
        this.setState({ isReady: true });
    }

    render() {
        if (!this.state.isReady) {
            return <AppLoading />;
        }

        return <Home />;
    }
}

