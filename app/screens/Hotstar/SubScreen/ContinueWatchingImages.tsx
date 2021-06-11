import { length } from 'ramda'
import React, { Component } from 'react'
import { View, TouchableOpacity, Text, FlatList, Image } from 'react-native'
import ViewScreen from './ViewScreen'
const imagePath = 'http://image.tmdb.org/t/p/w500/'
class ContinueWatching extends React.Component {
    state = {
    }
    viewDetails = (item) => {
        this.props.navigation.navigate('ViewScreen', {
            itemDetail: item
        })
    }
    renderImages = (item, index) => {
        const { trandingMovie } = this.props
        const l = trandingMovie.length;
        return (
            <TouchableOpacity style={{ flex: 1, padding: 5, marginLeft: index == 0 ? 10 : 0, marginRight: index == l - 1 ? 10 : 0 }} onPress={() => this.viewDetails(item)} >
                <Image style={{ borderRadius: 5, resizeMode: 'stretch', height: 180, width: 120,backgroundColor:'black' }}
                    source={{ uri: item.file_path ? imagePath + item.file_path : null }} />
            </TouchableOpacity>
        )
    }
    render() {
        const { trandingMovie } = this.props
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                // style={{backgroundColor:'black'}}
                    horizontal
                    data={trandingMovie ? trandingMovie : []}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => this.renderImages(item, index)}
                />
            </View>
        )
    }
}

export default ContinueWatching