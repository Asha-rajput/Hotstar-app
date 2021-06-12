import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { Icon } from 'native-base'

class MyMenuIcon extends React.Component {
    SearchScreen = () => {
        this.props.navigation.navigate('SearchScreen' )
    }
    render() {
        return (
            <TouchableOpacity onPress={() => this.SearchScreen()}>
                <Icon style={{ color: 'white' }} name='search' />
            </TouchableOpacity>
        )
    }
}

export default MyMenuIcon