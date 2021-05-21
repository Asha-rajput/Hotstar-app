import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
// import Swiper from './Components/Swiper.js'
import Header from './SubScreen/Header'
import Menu from './SubScreen/Menu'

class SportScreen extends React.Component {
    render() {
        console.log('111111111111111111111111111111111111111')
        return (
            <View style={{ flex: 1 }}>
                        <Menu {...this.props} />

                {/* <Header {...this.props} /> */}
                <Text> News Screen</Text>

            </View>
        )
    }
}

export default SportScreen