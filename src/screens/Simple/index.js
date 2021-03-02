import { Component } from 'react';
import { View, Text } from 'react-native';

export default class Simple extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Text>This is the simple page</Text>
        )
    }
}