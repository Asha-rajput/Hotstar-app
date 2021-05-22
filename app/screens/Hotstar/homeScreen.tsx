import React, { Component } from 'react'
import { View, TextStyle, Text, ScrollView } from 'react-native'
// import Swiper from './Components/Swiper.js'
import Header from './SubScreen/Header'
import SwiperScreen from './SubScreen/swiper'
import ContinueWatching from './SubScreen/ContinueWatching'
import { Container } from 'native-base'
import { getAPI } from '../../services/api/index'
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
    render() {
        const { trandingMovie, trandingTV, trandingAll, discoverMovies, discoverTV } = this.state
        return (
            <Container style={{ backgroundColor: '#121926' }}>
                <Header {...this.props} />
                <ScrollView>
                    <View style={{ flex: 1, backgroundColor: '#121926' }}>
                        <SwiperScreen {...this.props} />

                        <Text style={textLabelStyle}>Trending</Text>
                        <ContinueWatching trandingMovie={trandingAll} {...this.props} {...this.state} />

                        <Text style={textLabelStyle}>Popular Movies</Text>
                        <ContinueWatching trandingMovie={trandingMovie} {...this.props} />

                        <Text style={textLabelStyle}>Popular TV Shows</Text>
                        <ContinueWatching trandingMovie={trandingTV} {...this.props} />

                        <Text style={textLabelStyle}>Discover Movies</Text>
                        <ContinueWatching trandingMovie={discoverMovies} {...this.props} />

                        <Text style={textLabelStyle}>Discover TV Shows</Text>
                        <ContinueWatching trandingMovie={discoverTV} {...this.props} />

                        <Text style={textLabelStyle}>Popular Movies</Text>
                        <ContinueWatching trandingMovie={[{}, {}, {}]} {...this.props} />

                    </View>
                </ScrollView>
            </Container>
        )
    }
}

export default homeScreen

const textLabelStyle: TextStyle = { fontSize: 18, color: 'white', fontWeight: '400', marginTop: 20, marginBottom: 10, marginLeft: 5 }