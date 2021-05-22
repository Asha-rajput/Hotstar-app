import React, { Component } from 'react'
import { Text, View, Image, Dimensions, ImageBackground } from 'react-native'
import Swiper from 'react-native-swiper'
// const { width } = Dimensions.get('window')


const renderPagination = (index, total, context) => {
    return (
        <Text style={{ color: 'grey', position: 'absolute', right: 10 }}>
            <Text style={{ color: '#fafafa' }}>{index + 1}</Text>/{total}
        </Text>
    )
}

export default class extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'black', height: 200, borderRadius: 10, marginRight: 5, marginTop: 10, marginLeft: 5 }}>
                <Swiper
                    renderPagination={renderPagination}
                    loop={true}
                    autoplay={true}
                >
                    <View>
                        <Image style={{ height: '100%', width: '100%', borderRadius: 10 }} source={require('../../Hotstar/p1.jpg')} />
                    </View>
                    <View>
                        <Image style={{ height: '100%', width: '100%', borderRadius: 10 }} source={require('../../Hotstar/p2.jpg')} />
                    </View>
                    <View>
                        <Image style={{ height: '100%', width: '100%', borderRadius: 10 }} source={require('../../Hotstar/p3.webp')} />
                    </View>
                    <View>
                        <Image style={{ height: '100%', width: '100%', borderRadius: 10 }} source={require('../../Hotstar/p5.jpeg')} />
                    </View>
                </Swiper>
            </View>
        )
    }
}

