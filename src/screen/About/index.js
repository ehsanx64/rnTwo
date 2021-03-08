import React from 'react';
import { Text, View, Button } from 'react-native';
import _ from 'lodash';

import AppScreen from '../../lib/AppScreen';

function About({ route, navigation }) { 
    let referrer = '';
    let aboutType = '';


    if (route.params !== undefined) {
        referrer = _.get(route.params, 'referrer', 'none');
        aboutType = _.get(route.params, 'aboutType', 'Not specified.')
    } 

    return (
        <AppScreen nav={navigation} title="About" subTitle="What is all about?!">
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
        </AppScreen>
    )
}

export default About;