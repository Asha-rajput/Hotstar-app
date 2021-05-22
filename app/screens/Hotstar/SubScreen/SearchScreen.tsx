import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
// import Icon from 'react-native-vector-icons/Icon';
import {Icon } from 'native-base'

class Menu extends React.Component {
    
    render() {
        console.log('111111111111111111111111111111111111111')
        return (
            <View style={{ flex: 1 }}>
                {/* <Header {...this.props} /> */}
                <TouchableOpacity>
                            <Icon style={{ color: 'white' }} name='search' />
                        </TouchableOpacity>
            </View>
        )
    }
}

export default Menu