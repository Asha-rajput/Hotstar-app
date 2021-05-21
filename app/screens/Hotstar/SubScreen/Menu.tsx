import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';

class Menu extends React.Component {
    nav = () => {
        console.log('777777', this.props)
        this.props.navigation.openDrawer()
    }
    render() {
        console.log('111111111111111111111111111111111111111')
        return (
            <View style={{ flex: 1 }}>
                {/* <Header {...this.props} /> */}
                <TouchableOpacity onPress={() => this.nav()} style={{ margin: 10 }} >
                            <Feather size={28} color={'white'} name="menu" />
                        </TouchableOpacity>

            </View>
        )
    }
}

export default Menu