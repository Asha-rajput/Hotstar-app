import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { Icon } from 'native-base'
class Menu extends React.Component {
    render() {
        return (
            <TouchableOpacity>
                <Icon style={{ color: 'white' }} name='search' />
            </TouchableOpacity>
        )
    }
}

export default Menu