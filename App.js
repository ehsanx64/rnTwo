import React from 'react';
import { Provider } from 'react-redux';
import { Text, Button, View } from "react-native";
import _ from 'lodash';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import About from './src/screen/About';
import Contact from './src/screen/Contact';
import Home from './src/screen/Home';
import HttpCat from './src/screen/HttpCat';

import store from './src/redux/index';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return (
        <Provider store={store}>
            <Drawer.Navigator initialRouteName="Home" drawerPosition="left">
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="About" component={About} />
                <Drawer.Screen name="Contact" component={Contact} />
                <Drawer.Screen name="HttpCat" component={HttpCat} />
            </Drawer.Navigator>
        </Provider>
    )
}

export default App = () => {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    );
}