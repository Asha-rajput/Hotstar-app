import React, { Component } from 'react'
import { View, TouchableOpacity, Image, ImageBackground, ViewStyle, ScrollView } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo'
import moment from 'moment'
import ReadMore from 'react-native-read-more-text';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { getAPI } from '../../../services/api/index'
import ContinueWatching from './../SubScreen/ContinueWatching'
import ContinueWatchingPoster from './../SubScreen/ContinueWatchingImages'



class ViewScreen extends React.Component {
    state = {
        ItemDetail: {},
        isCollapsed: false,
        MovieList: [],
        MoviePosterlist: []

    }
    fetchRecommendedMovies = async (id) => {
        try {
            const res = await getAPI('movie/' + id + '/recommendations')
            console.log('res,', res)
            if (res && res.data) {
                this.setState({ MovieList: res.data.results })
            }
        } catch (error) {
        }
    }

    fetchMoviesPosters = async (id) => {
        try {
            const res = await getAPI('movie/' + id + '/images')
            console.log('res,images', res)
            if (res && res.data) {
                this.setState({ MoviePosterlist: res.data.posters })
            }
        } catch (error) {
        }
    }

    componentDidMount() {
        console.log(this.props, '111111')
        const { navigation, route } = this.props
        const { itemDetail } = route.params
        console.log('datayjjgftrtr', itemDetail)
        this.setState({ ItemDetail: itemDetail })
        this.fetchRecommendedMovies(itemDetail.id)
        this.fetchMoviesPosters(itemDetail.id)
    }

    _renderTruncatedFooter = (handlePress) => {
        return (
            <Text style={{ color: 'grey', fontWeight: 'bold' }} onPress={handlePress}>
                Read more
            </Text>
        );
    }

    _renderRevealedFooter = (handlePress) => {
        return (
            <Text style={{ color: 'grey', fontWeight: 'bold' }} onPress={handlePress}>
                Show less
            </Text>
        );
    }

    render() {
        const { ItemDetail, MovieList, MoviePosterlist } = this.state

        return (
            <Container style={{ backgroundColor: '#black' }}>

                <Header style={{ backgroundColor: '#121926' }}>
                    <Left style={{ flex: 1 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Button onPress={() => this.props.navigation.goBack()} transparent>
                                <Icon name='arrow-back' />
                            </Button>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ justifyContent: 'center' }}>
                                <Title style={{color:'#FFF'}}>{ItemDetail && ItemDetail.name ? ItemDetail.name : ItemDetail.title}</Title>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </Left>
                    {/* <Body style={{ flex: 0 }}>
                    </Body> */}
                    {/* <Right style={{ flex: 0.01 }}>
                    </Right> */}
                </Header>
                <ScrollView contentContainerStyle={{ backgroundColor: 'black' }}>
                    <View style={{ backgroundColor: 'black' }}>
                        <View>
                            <ImageBackground style={{ height: 250, width: '100%', resizeMode: 'stretch' }} source={{ uri: 'http://image.tmdb.org/t/p/w500/' + ItemDetail.backdrop_path }} >
                                <View style={{ position: 'absolute', bottom: 10, flexDirection: 'row' }}>
                                    <View style={{ alignSelf: 'center', paddingLeft: 10 }}>
                                        <Entypo name="controller-play" size={35} color={'white'} ></Entypo>
                                    </View>
                                    <View style={{ paddingLeft: 10 }}>
                                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Watch First Episode</Text>
                                        <Text style={{ color: 'grey' }}>1 hr 56min</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>


                        <View style={{ flexDirection: 'row', padding: 10 }}>
                            <View style={{ flex: 1 }}>
                                <Image style={{ height: 100, borderRadius: 5 }} source={{ uri: 'http://image.tmdb.org/t/p/w500/' + ItemDetail.backdrop_path }} />

                            </View>
                            <View style={{ flex: 3, paddingLeft: 10 }}>
                                <Text style={{ color: '#f5f5f5', fontWeight: 'bold' }}>{ItemDetail.name ? ItemDetail.name : ItemDetail.title}</Text>
                                <Text style={{ textTransform: 'capitalize', color: 'grey' }}>{ItemDetail.media_type}</Text>
                                <Text style={{ color: 'grey' }}>{moment(ItemDetail.release_date).format('YYYY')}</Text>

                            </View>

                        </View>
                        <View style={{ padding: 10 }}>
                            <ReadMore
                                numberOfLines={2}
                                renderTruncatedFooter={this._renderTruncatedFooter}
                                renderRevealedFooter={this._renderRevealedFooter}
                                onReady={this._handleTextReady}>
                                <Text numberOfLines={2} style={{ color: '#9e9e9e', padding: 10 }}>{ItemDetail.overview}</Text>

                            </ReadMore>
                        </View>


                        <View style={{ flexDirection: 'row', padding: 10 }}>
                            <TouchableOpacity style={ButtonStyling} onPress={() => console.log('vsjdng')} >
                                <FontAwesome size={20} name='download' color={'#f5f5f5'}></FontAwesome>
                                <Text style={{ paddingLeft: 10, fontWeight: '400', color: '#f5f5f5' }}>Download</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={ButtonStyling}>
                                <FontAwesome5 name="plus" size={20} color={'#f5f5f5'}></FontAwesome5>
                                <Text style={{ paddingLeft: 10, fontWeight: '400', color: '#f5f5f5' }}>Watchlist</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={ButtonStyling}>
                                <Fontisto name="share-a" size={18} color={'#f5f5f5'}></Fontisto>
                                <Text style={{ paddingLeft: 10, fontWeight: '400', color: '#f5f5f5' }}>Share</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{ color: 'white', padding: 10, fontWeight: '600', fontSize: 18 }}>More Like This</Text>

                        <ContinueWatchingPoster trandingMovie={MoviePosterlist} {...this.props} />

                        <Text style={{ color: 'white', padding: 10, paddingTop: 20, fontWeight: '600', fontSize: 18 }}> Movies Recommended For You</Text>
                        <ContinueWatching trandingMovie={MovieList} {...this.props} />

                    </View>
                </ScrollView>
            </Container>
        );
    }
}
export default ViewScreen

const ButtonStyling: ViewStyle = {
    flex: 1, marginRight: 5, flexDirection: 'row', backgroundColor: '#212121', paddingLeft: 15, paddingRight: 15, borderRadius: 3, justifyContent: 'center', alignItems: 'center', paddingTop: 10, paddingBottom: 10
}