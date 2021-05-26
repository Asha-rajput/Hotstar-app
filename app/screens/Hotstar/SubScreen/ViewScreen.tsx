import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';



class ViewScreen extends React.Component {
    state = {
        ItemDetail: {}
    }

    componentDidMount() {
        console.log(this.props, '111111')
        const { navigation, route } = this.props
        const { itemDetail } = route.params
        console.log('data', itemDetail)
        this.setState({ ItemDetail: itemDetail })
    }

    render() {
        const { ItemDetail } = this.state
        return (
            <Container>
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
                    <Body style={{ flex: 0 }}>
                    </Body>
                    <Right style={{ flex: 0.01 }}>
                    </Right>
                </Header>
            </Container>
        );
    }
}
export default ViewScreen