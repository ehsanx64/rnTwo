import React from 'react';
import { Text, Button, View } from "react-native";
import _ from 'lodash';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import About from './src/screen/About';
import Contact from './src/screen/Contact';
import Home from './src/screen/Home';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Home" drawerPosition="left">
            <Drawer.Screen name="Home" component={Home} options={{
                title: 'My home',
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }} />
            <Drawer.Screen name="About" component={About} />
            <Drawer.Screen name="Contact" component={Contact} />
        </Drawer.Navigator>
    )
}

export default App = () => {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    );
}