import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import {
    Form, Item, Label, Input, Text,
    Button, Icon
} from 'native-base';

import AppScreen from '../../lib/AppScreen';
import { setMyCatName } from '../../redux/HttpCat';

const styles = StyleSheet.create({
    formWrapper: {
        marginLeft: -15,
        marginBottom: 20
    },
    actionsWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        
    },
    buttons: {
        flex: 1,
        padding: 5
    }
});

const HttpCat = ({ navigation, myCat, setMyCatName }) => {
    const [newName, setNewName] = useState('');
    const [inputStatus, setInputStatus] = useState('');

    const updateCatName = () => {
        // Do nothing if there's no name
        if (newName !== '') {
            setMyCatName(newName);
        }
    }

    const renderNewName = () => {
        let out = (
            <Item floatingLabel success>
                <Label>New name:</Label>
                <Input defaultValue={newName}
                    onChangeText={text => setNewName(text)} />
                <Icon name='checkmark-circle' />
            </Item>
        );

        if (newName === '') {
            out = (
                <Item floatingLabel error>
                    <Label>New name:</Label>
                    <Input defaultValue={newName}
                        onChangeText={text => setNewName(text)} />
                    <Icon name='close-circle' />
                </Item>
            );
        }

        return out;
    }

    const render = () => {
        return (
            <AppScreen nav={navigation} title="HTTP Cat" subTitle="HTTP vs. Cats">
                <Text>Cat's name is: {myCat.name}</Text>
                <View style={styles.formWrapper}>
                    <Form>
                        {renderNewName()}
                    </Form>
                </View>
                <View style={styles.actionsWrapper}>
                    <View style={styles.buttons}>
                        <Button block primary onPress={updateCatName}>
                            <Text>Set new name</Text>
                        </Button>
                    </View>
                    <View style={styles.buttons}>
                        <Button block light onPress={() => setNewName('')}>
                            <Text>Reset</Text>
                        </Button>
                    </View>
                </View>
            </AppScreen>
        );
    }

    return render();
}

const mapStateToProps = (state) => ({
    myCat: state.httpCat.myCat,
});

const mapDisptachToProps = dispatch => ({
    setMyCatName: name => dispatch(setMyCatName(name))
});

export default connect(mapStateToProps, mapDisptachToProps)(HttpCat);