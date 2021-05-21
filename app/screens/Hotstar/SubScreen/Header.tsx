import React, { Component } from 'react';
import { TouchableOpacity, Image, View, Button } from 'react-native'
import { Container, Header, Left, Body, Right, Icon, Title, Text } from 'native-base';
// import Feather from 'react-native-vector-icons/Feather';
import Menu from './Menu'


export default class HeaderMultipleIconExample extends Component {
    
    render() {
        return (
            <Container style={{flex: 1}}>
                <Header style={{ backgroundColor: '#121926' }}>
                    <Left style={{ flex: 0.5 }}>
                        <Menu {...this.props} />
                        {/* <TouchableOpacity onPress={() => this.nav()} style={{ margin: 10 }} >
                            <Feather size={28} color={'white'} name="menu" />
                        </TouchableOpacity> */}
                    </Left>
                    <Body style={{ flex: 2.3 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                            <Image resizeMode={'stretch'} style={{ width: 170, height: 40 }} source={require('../../Hotstar/disney-hotstar-logo.png')} />
                            <TouchableOpacity>
                                <Text style={{ fontSize: 14, color: 'blue', borderColor: 'blue', borderWidth: 1, alignSelf: 'center', padding: 1 }}>SUBSCRIBE</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{ alignSelf: 'center', fontSize: 20, color: 'yellow' }}>Kids</Text>
                            </TouchableOpacity>
                        </View>

                    </Body>
                    <Right style={{ flex: 0.4, }}>
                        <TouchableOpacity>
                            <Icon style={{ color: 'white' }} name='search' />
                        </TouchableOpacity>
                    </Right>
                </Header>
            </Container >
        );
    }
}