import React from 'react';
import _ from 'lodash';
import { Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
    Container, Content, Title, Body, Subtitle,
    Header, Left, Right, Icon, Button
} from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default class AppScreen extends React.Component {
    constructor(props) {
        super(props);

        this.nav = props.nav;
        this.title = _.get(props, 'title', '');
        this.subTitle = _.get(props, 'subTitle', '');
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

    renderSubtitle() {
        let st = this.subTitle;

        if (st !== '') {
            return <Subtitle>{st}</Subtitle>
        }

        return null;
    }

    render() {
        if (!this.state.isReady) {
            return <AppLoading />;
        }

        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => {
                            this.nav.openDrawer();
                        }}>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{this.title}</Title>
                        {this.renderSubtitle()}
                    </Body>
                    <Right />
                </Header>

                <Content>
                    {this.props.children}
                </Content>
            </Container>
        );
    }
}

