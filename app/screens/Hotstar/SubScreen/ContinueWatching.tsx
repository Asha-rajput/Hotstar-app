import React, { Component } from 'react'
import { View, TouchableOpacity, Text, FlatList, Image } from 'react-native'
const imagePath = 'http://image.tmdb.org/t/p/w500/'
class ContinueWatching extends React.Component {
    state = {
    }
    renderImages = (item) => {
        return (
            <View style={{ flex: 1, padding: 5 }}>
                <Image style={{ borderRadius: 5, resizeMode: 'stretch', height: 180, width: 135, backgroundColor: '#eceff1' }}
                    source={{ uri: item.poster_path ? imagePath + item.poster_path : null }} />
            </View>
        )
    }
    render() {
        console.log('this.props', this.props)
        const { trandingMovie } = this.props
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    horizontal
                    data={trandingMovie ? trandingMovie : []}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => this.renderImages(item)}
                />
            </View>
        )
    }
}

export default ContinueWatching