import React, { Fragment } from 'react'
import { View, TextInput, StatusBar, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native'
import SafeAreaView from "react-native-safe-area-view"
import { getQueryAPI } from '../../../services/api/index'
const imagePath = 'http://image.tmdb.org/t/p/w500/'


class SportScreen extends React.Component {
    state = {
        MovieList: []
    }
    getMovieSearching = async (text) => {
        if (text && text.length > 2) {
            try {
                const res = await getQueryAPI('search/movie?query=' + text)
                console.log('res', res)
                if (res && res.data) {
                    this.setState({ MovieList: res.data.results })
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
    searching = (text) => {
        this.getMovieSearching(text)
    }
    renderImages = (item, index) => {
        console.log('vksk',)
        return (
            <TouchableOpacity style={{ flex: 1, padding: 5 }} >
                <Image style={{ borderRadius: 5, resizeMode: 'stretch', height: 180, width: 120, backgroundColor: '#222' }}
                    source={{ uri: item.poster_path ? imagePath + item.poster_path : null }} />
            </TouchableOpacity>
        )
    }
    render() {
        const { MovieList } = this.state
        return (
            <Fragment>
                <StatusBar backgroundColor="transparent" barStyle="dark-content" />
                <SafeAreaView style={{ flex: 1, backgroundColor: '#121926' }}>
                    <View style={{ padding: 10 }}>
                        <TextInput
                            style={{ height: 50, borderColor: 'black', borderWidth: 2 }}
                            placeholder="Search"
                            placeholderTextColor={'white'}
                            onChangeText={(text) => this.searching(text)}
                        />
                        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: 'black' }}>
                            <View style={{ flex: 1, backgroundColor: 'black' }}>
                                <FlatList
                                    numColumns={3}
                                    data={MovieList}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={({ item, index }) => this.renderImages(item, index)}
                                />
                            </View>
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </Fragment>
        )
    }
}

export default SportScreen