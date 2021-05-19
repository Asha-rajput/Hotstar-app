import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
// import HomeScreen from './homeScreen'


class getStarted extends React.Component {
    
    render() {
        console.log('AAAA=>>>>>>>', this.props)
        return (
            <View style={{ flex: 1, backgroundColor: '#0C111B', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={{
                    backgroundColor: 'blue', borderColor: 'black', borderWidth: 2, height: 50,
                    width: 400., borderRadius: 20
                }}
                    onPress={() => this.props.navigation.navigate('Drawer')}
                >
                    <Text style={{ color: 'white', fontSize: 25, alignSelf: 'center' }}>Get Started</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default getStarted