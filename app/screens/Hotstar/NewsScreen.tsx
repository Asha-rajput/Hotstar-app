import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
// import Swiper from './Components/Swiper.js'
import Header from './SubScreen/Header'

class SportScreen extends React.Component {
    render() {
        console.log('111111111111111111111111111111111111111')
        return (
            <View style={{ flex: 1 }}>
                <Header {...this.props} />
                <Text> News Screen</Text>

            </View>
        )
    }
}

export default SportScreen