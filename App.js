import React from 'react';
import { Text, Button, View } from "react-native";
import AppLoading from 'expo-app-loading';
// import {
//     Container, Content, Title, Body,
//     Header, Left, Right, Icon, Button
// } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import _ from 'lodash';

import 'react-native-gesture-handler';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


// import Sidebar from './src/screens/Sidebar';
// import Home from './src/screens/Home/Home';

function AboutScreen({route, navigation }) { 
    let referrer = '';
    let aboutType = '';

    if (route.params !== undefined) {
        referrer = _.get(route.params, 'referrer', 'none');
        aboutType = _.get(route.params, 'aboutType', 'Not specified.')
    } 

    return (
        <View>
            <Text>Welcome to About screen</Text>
            <Text>You are comming from: {referrer}</Text>
            <Text>About type: {aboutType}</Text>

            <Button title="Go to Contact Page" onPress={e => {
                navigation.navigate('Contact', {
                    contactMethod: 'email',
                    referrer: 'about'
                });
            }} />
        </View>
    )
}

function ContactScreen({route, navigation }) {
    let referrer = '';
    let contactMethod = '';

    if (route.params !== undefined) {
        referrer = _.get(route.params, 'referrer', 'none');
        contactMethod = _.get(route.params, 'contactMethod', 'Not specified.')
    } 

    return (
        <View>
            <Text>Welcome to Contact screen</Text>
            <Text>You are comming from: {referrer}</Text>
            <Text>Contact method: {contactMethod}</Text>
            <Button title="Go to About Page" onPress={e => {
                navigation.navigate('About', {
                    aboutType: 'company',
                    referrer: 'contact'
                });
            }} />
        </View>
    )
}

const Stack = createStackNavigator();

// const Drawer = createDrawerNavigator();

// export default App = () => {
//     return (
//         <NavigationContainer>
//             <Drawer.Navigator initialRouteName="About">
//                 <Drawer.Screen name="About" component={AboutScreen} />
//                 <Drawer.Screen name="Contact" component={ContactScreen} />
//             </Drawer.Navigator>
//         </NavigationContainer>
//     )
// }


export default App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name="Home" component={Home} /> */}
                <Stack.Screen name="About" component={AboutScreen} />
                <Stack.Screen name="Contact" component={ContactScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
