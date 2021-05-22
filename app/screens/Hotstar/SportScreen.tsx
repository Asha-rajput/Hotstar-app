import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
// import Swiper from './Components/Swiper.js'
import Header3 from './SubScreen/Header3'

class SportScreen extends React.Component {
    render() {
        console.log('111111111111111111111111111111111111111')
        return (
            <View style={{ flex: 1 }}>
                <Header3 {...this.props} />

                <Text> Sport Screen</Text>

            </View>
        )
    }
}

export default SportScreen