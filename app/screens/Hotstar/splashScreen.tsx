import React, { Component } from "react"
import { View, Image } from "react-native"
class SplashScreen extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('GetStarted')
        }, 5000);
    }
    render() {
        console.log(this.props)
        return (
            <View style={{ flex: 1 }}>
                <Image resizeMode={'stretch'} style={{
                    flex: 1,
                    width: null,
                    height: null
                }} source={require('../Hotstar/Assets/hotstar.jpg')} />
            </View>
        )
    }
}

export default SplashScreen
