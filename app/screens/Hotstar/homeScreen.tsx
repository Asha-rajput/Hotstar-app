import React, { Component } from 'react'
import { View, TextStyle, Text, ScrollView, TouchableOpacity } from 'react-native'
// import Swiper from './Components/Swiper.js'
import Header from './SubScreen/Header'
import SwiperScreen from './SubScreen/swiper'
import ContinueWatching from './SubScreen/ContinueWatching'
import { Container } from 'native-base'
import { getAPI } from '../../services/api/index'
import AntDesign from 'react-native-vector-icons/AntDesign'

class homeScreen extends React.Component {
    state = {
        trandingMovie: [],
        trandingTV: [],
        trandingAll: [],
        discoverMovies: [],
        discoverTV: []
    }
    componentDidMount() {
        this.fetchTrendingAll()
        this.fetchTrendingMovies()
        this.fetchTrendingTV()
        this.fetchDiscoverMovies()
        this.fetchDiscoverTV()
    }
    fetchTrendingAll = async () => {
        try {
            const res = await getAPI('trending/all/week')
            if (res && res.data) {
                this.setState({ trandingAll: res.data.results })
            }
        } catch (error) {
        }
    }
    fetchTrendingMovies = async () => {
        try {
            const res = await getAPI('trending/movie/week')
            if (res && res.data) {
                this.setState({ trandingMovie: res.data.results })
            }
        } catch (error) {
        }
    }
    fetchTrendingTV = async () => {
        try {
            const res = await getAPI('trending/tv/week')
            if (res && res.data) {
                this.setState({ trandingTV: res.data.results })
            }
        } catch (error) {
        }
    }
    fetchDiscoverMovies = async () => {
        try {
            const res = await getAPI('discover/movie')
            if (res && res.data) {
                this.setState({ discoverMovies: res.data.results })
            }
        } catch (error) {
        }
    }
    fetchDiscoverTV = async () => {
        try {
            const res = await getAPI('discover/tv')
            if (res && res.data) {
                this.setState({ discoverTV: res.data.results })
            }
        } catch (error) {
        }
    }

    ViewAllMovies = (url) => {
        this.props.navigation.navigate('ViewAllMovies',{
            apiURL: url
        })
    }
    render() {
        const { trandingMovie, trandingTV, trandingAll, discoverMovies, discoverTV } = this.state
        return (
            <Container style={{ backgroundColor: '#121926' }}>
                <Header {...this.props} />
                <ScrollView>
                    <View style={{ flex: 1, backgroundColor: '#121926' }}>
                        <SwiperScreen {...this.props} />
                        <View>
                            <Text style={textLabelStyle}>Trending</Text>
                            < TouchableOpacity style={{ position: 'absolute', right: 10, top: 25 }} onPress={() => this.ViewAllMovies('trending/all/week')}>
                                < AntDesign name='right' color={'gray'} size={18} />
                            </TouchableOpacity>

                        </View>
                        <ContinueWatching trandingMovie={trandingAll} {...this.props} {...this.state} />

                        <View>
                            <Text style={textLabelStyle}>Popular Movies</Text>
                            < TouchableOpacity style={{ position: 'absolute', right: 10, top: 25 }} onPress={() => this.ViewAllMovies('trending/movie/week')}>
                                < AntDesign name='right' color={'gray'} size={18} />
                            </TouchableOpacity>
                        </View>
                        <ContinueWatching trandingMovie={trandingMovie} {...this.props} />

                        <View>
                            <Text style={textLabelStyle}>Popular TV</Text>
                            < TouchableOpacity style={{ position: 'absolute', right: 10, top: 25 }} onPress={() => this.ViewAllMovies('trending/tv/week')}>
                                < AntDesign name='right' color={'gray'} size={18} />
                            </TouchableOpacity>
                        </View>
                        <ContinueWatching trandingMovie={trandingTV} {...this.props} />
                        <View>
                            <Text style={textLabelStyle}>Discover Movies</Text>
                            < TouchableOpacity style={{ position: 'absolute', right: 10, top: 25 }} onPress={() => this.ViewAllMovies('discover/movie')}>
                                < AntDesign name='right' color={'gray'} size={18} />
                            </TouchableOpacity>
                        </View>
                        <ContinueWatching trandingMovie={discoverMovies} {...this.props} />

                        <View>
                            <Text style={textLabelStyle}>Discover TV Shows</Text>
                            < TouchableOpacity style={{ position: 'absolute', right: 10, top: 25 }} onPress={() => this.ViewAllMovies('discover/tv')}>
                                < AntDesign name='right' color={'gray'} size={18} />
                            </TouchableOpacity>
                        </View>

                        <ContinueWatching trandingMovie={discoverTV} {...this.props} />


                    </View>
                </ScrollView>
            </Container>
        )
    }
}

export default homeScreen

const textLabelStyle: TextStyle = { fontSize: 18, color: 'white', fontWeight: '400', marginTop: 20, marginBottom: 10, marginLeft: 5 }