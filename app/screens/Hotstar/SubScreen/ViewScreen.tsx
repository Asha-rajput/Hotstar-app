import React, { Component } from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';



class ViewScreen extends React.Component {
    state = {
        ItemDetail: {}
    }

    componentDidMount() {
        console.log(this.props, '111111')
        const { navigation, route } = this.props
        const { itemDetail } = route.params
        console.log('datayjjgftrtr', itemDetail)
        this.setState({ ItemDetail: itemDetail })
    }

    render() {
        const { ItemDetail } = this.state
        return (
            // <Container>
            <View>
                <Header style={{ backgroundColor: '#121926' }}>
                    <Left style={{ flex: 1 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Button transparent>
                                <Icon name='arrow-back' />
                            </Button>
                            <View style={{ justifyContent: 'center' }}>
                                <Title>{ItemDetail && ItemDetail.name ? ItemDetail.name : ItemDetail.title}</Title>
                            </View>
                        </TouchableOpacity>
                    </Left>
                    {/* <Body style={{ flex: 0 }}>
                    </Body> */}
                    {/* <Right style={{ flex: 0.01 }}>
                    </Right> */}
                </Header>
                <View style={{ backgroundColor: 'black', height: 250 }}>
                    <Image style={{ height: '100%', width: '100%' }} source={{ uri: 'ItemDetail.poster_path'  }} />
                    <Text style={{ position: 'absolute', color: 'white', bottom: 40, left: 10,fontWeight:'bold' }}>Watch First Episode</Text>
                </View>
                {/* </Container> */}
            </View>
        );
    }
}
export default ViewScreen