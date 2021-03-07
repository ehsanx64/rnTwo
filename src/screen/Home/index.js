import React from 'react';
import { Text } from 'react-native';

import AppScreen from '../../lib/AppScreen';

import styles from './styles';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppScreen nav={this.props.navigation}>
                <Text style={styles.topHeader}>Welcome to rnTwo</Text>
            </AppScreen>
        );
    }
}

