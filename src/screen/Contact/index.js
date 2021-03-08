import React from 'react';
import { Text, View, Button } from 'react-native';
import _ from 'lodash';

import AppScreen from '../../lib/AppScreen';

function Contact({route, navigation }) {
    let referrer = '';
    let contactMethod = '';

    if (route.params !== undefined) {
        referrer = _.get(route.params, 'referrer', 'none');
        contactMethod = _.get(route.params, 'contactMethod', 'Not specified.')
    } 

    return (
        <AppScreen nav={navigation} title="Contact" subTitle="Send a message">
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
        </AppScreen>
    );
}

export default Contact;