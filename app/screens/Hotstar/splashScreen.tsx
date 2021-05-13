import React, { Component } from 'react'
import { View, Image } from 'react-native'

class splashscreen extends React.Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
    //   this.props.navigation.navigate('getstarted')
    }, 1500)


  }
  render() {
      console.log(this.props)
    return (
      <View style={{ flex: 1 }}>
        <Image resizeMode={'stretch'} style={{
          flex: 1,
          width: null,
          height: null
        }} source={require('../Hotstar/hotstar.jpg')} />
      </View>
    )
  }
}

export default splashscreen