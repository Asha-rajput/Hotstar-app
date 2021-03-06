import React, { Component } from 'react'
import { View, TouchableOpacity, Text,ScrollView ,Image,FlatList} from 'react-native'
// import Swiper from './Components/Swiper.js'
import Header1 from './SubScreen/Header1'
import { getAPI } from '../../services/api/index'
const imagePath = 'http://image.tmdb.org/t/p/w500/'



class TvScreen extends React.Component {
    state = {

        MovieList: []

    }
    fetchTrendingTV = async () => {
        try {
            const res = await getAPI('trending/tv/week')
            console.log('res,', res)
            if (res && res.data) {
                this.setState({ MovieList: res.data.results })
            }
        } catch (error) {
        }
    }
    componentDidMount() {
        console.log(this.props, '111111')
        this.fetchTrendingTV()

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
console.log('0202020030')
        return (
            <View style={{ flex: 1 ,backgroundColor:'black'}}>
                <Header1 {...this.props} />
                <Text style={{color:'white',fontSize:20,fontWeight:'600',padding:10}}>Tv Screen</Text>
                <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: 'black' }}>
                    <View style={{ flex:1,backgroundColor: 'black' }}>
                        <FlatList
                        numColumns={3}
                            data={MovieList}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => this.renderImages(item, index)}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default TvScreen