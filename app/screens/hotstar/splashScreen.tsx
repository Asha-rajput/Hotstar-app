import React, { Component } from "react"
import { View, Text } from "react-native"
class SplashScreen extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('GetStarted')
        }, 5000);
    }
    render() {
        console.log(this.props)
        return (
            <View>
                <Text>SplashScreen Yo</Text>
            </View>
        )
    }
}

export default SplashScreen
