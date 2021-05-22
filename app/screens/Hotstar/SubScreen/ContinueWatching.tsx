import React, { Component } from 'react'
import { View, TouchableOpacity, Text, FlatList, Image } from 'react-native'
const imagePath = 'http://image.tmdb.org/t/p/w500/'
class ContinueWatching extends React.Component {
    state = {
        a: [1, 3, 4, 6, 7, 5, 4, 3, 3, 6, 8, 43, 2, 0]
    }
    renderImages = (item) => {
        console.log('item', item)
        return (
            <View style={{ flex: 1, padding: 5, marginBottom: 20 }}>
                {/* <Text style={{color:'white'}}>{item}</Text> */}
                {/* <Image style={{ borderRadius: 5, resizeMode: 'stretch', height: 180, width: 150 }}
                    source={{ uri: item.poster_path ? imagePath + item.poster_path : null }} /> */}
            </View>
        )
    }
    render() {
        const { a } = this.state
        const { flag, trandingMovie } = this.props
        console.log('PROPS', trandingMovie)
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