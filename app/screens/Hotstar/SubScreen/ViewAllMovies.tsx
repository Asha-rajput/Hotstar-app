import React, { Component } from 'react'
import { View, TouchableOpacity, Image, ImageBackground, FlatList, ScrollView } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import { getAPI } from '../../../services/api/index'
const imagePath = 'http://image.tmdb.org/t/p/w500/'




class ViewScreen extends React.Component {
    state = {

        MovieList: []

    }
    fetchRecommendedMovies = async (url) => {
        try {
            const res = await getAPI(url)
            console.log('res,', res)
            if (res && res.data) {
                this.setState({ MovieList: res.data.results })
            }
        } catch (error) {
        }
    }



    componentDidMount() {
        console.log(this.props, '111111')
        const { navigation, route } = this.props
        const { apiURL } = route.params
        this.fetchRecommendedMovies(apiURL)
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
console.log('0000000',MovieList)
        return (
            <Container style={{ backgroundColor: '#black' }}>

                <Header style={{ backgroundColor: '#121926' }}>
                    <Left style={{ flex: 1 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Button transparent>
                                <Icon name='arrow-back' />
                            </Button>
                            <View style={{ justifyContent: 'center' }}>
                                <Title>Movies</Title>
                            </View>
                        </TouchableOpacity>
                    </Left>

                </Header>
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
            </Container>
        );
    }
}
export default ViewScreen

