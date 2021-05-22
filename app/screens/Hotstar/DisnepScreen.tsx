import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
// import Swiper from './Components/Swiper.js'
import Header2 from './SubScreen/Header2'

class TvScreen extends React.Component {
    render() {
        console.log('111111111111111111111111111111111111111')
        return (
            <View style={{ flex: 1 }}>
                <Header2 {...this.props} />
               

            </View>
        )
    }
}

export default TvScreen