import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
// import Swiper from './Components/Swiper.js'
import Header1 from './SubScreen/Header1'

class TvScreen extends React.Component {
    render() {
        console.log('111111111111111111111111111111111111111')
        return (
            <View style={{ flex: 1 }}>
                <Header1 {...this.props} />
                <Text>tv screen</Text>

            </View>
        )
    }
}

export default TvScreen