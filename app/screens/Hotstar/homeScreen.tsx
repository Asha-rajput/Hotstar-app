import React, { Component } from 'react'
import { View, TouchableOpacity, Text, ScrollView } from 'react-native'
// import Swiper from './Components/Swiper.js'
import Header from './SubScreen/Header'
import SwiperScreen from './SubScreen/swiper'
import ContinueWatching from './SubScreen/ContinueWatching'
import { Container } from 'native-base'
import { getAPI } from '../../services/api/index'
class homeScreen extends React.Component {
    state = {
        trandingMovie: []
    }
    componentDidMount() {
        this.fetchData()
    }
    fetchData = async () => {
        try {
            const res = await getAPI('trending/movie/week')
            console.log('AAAA RRRRRR===========', res)
            if (res && res.data) {
                this.setState({ trandingMovie: res.data.results })
            }
        } catch (error) {
            console.log('error====>>', error)
        }
    }
    render() {
        const { trandingMovie } = this.state
        return (
            <Container>
                <View>
                    <Header {...this.props} />
                </View>
                <ScrollView>
                    <View style={{ flex: 1, backgroundColor: '#121926' }}>
                        <SwiperScreen {...this.props} />

                        <Text style={{ fontSize: 18, color: 'white', fontWeight: '400' }}>Continue Wacthing.....</Text>
                        <ContinueWatching trandingMovie={trandingMovie} flag={true} {...this.props} />

                        <Text style={{ fontSize: 18, color: 'white', fontWeight: '400' }}>Latest & Trending</Text>
                        <ContinueWatching {...this.props} />

                        <Text style={{ fontSize: 18, color: 'white', fontWeight: '400' }}>Movies Recommended For You</Text>
                        <ContinueWatching {...this.props} />

                        <Text style={{ fontSize: 18, color: 'white', fontWeight: '400' }}>Popular shows</Text>
                        <ContinueWatching {...this.props} />

                        <Text style={{ fontSize: 18, color: 'white', fontWeight: '400' }}>Shows Recommended for You</Text>
                        <ContinueWatching {...this.props} />

                        <Text style={{ fontSize: 18, color: 'white', fontWeight: '400' }}>Popular Movies</Text>
                        <ContinueWatching {...this.props} />

                        <Text style={{ fontSize: 18, color: 'white', fontWeight: '400' }}>Live News</Text>
                        <ContinueWatching {...this.props} />

                    </View>
                </ScrollView>
            </Container>
        )
    }
}

export default homeScreen