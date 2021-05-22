import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';

class Menu extends React.Component {
    nav = () => {
        this.props.navigation.openDrawer()
    }
    render() {
        return (
            <TouchableOpacity onPress={() => this.nav()}>
                <Feather size={28} color={'white'} name="menu" />
            </TouchableOpacity>
        )
    }
}

export default Menu