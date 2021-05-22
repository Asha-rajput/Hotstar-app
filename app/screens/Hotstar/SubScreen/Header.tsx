import React, { Component } from 'react';
import { TouchableOpacity, Image, View, Button } from 'react-native'
import { Container, Header, Left, Body, Right, Icon, Title, Text } from 'native-base';
// import Feather from 'react-native-vector-icons/Feather';
import Menu from './Menu'
import SearchScreen from './SearchScreen'


export default class HeaderMultipleIconExample extends Component {

    render() {
        return (
            <Header style={{ backgroundColor: '#121926' }}>
                <Left style={{ flex: 0.5 }}>
                    <Menu {...this.props} />
                </Left>
                <Body style={{ flex: 3.5 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                        <Image resizeMode={'stretch'} style={{ width: 170, height: 35 }} source={require('../../Hotstar/disney-hotstar-logo.png')} />
                        <TouchableOpacity>
                            <Text style={{ fontSize: 12, color: 'blue', borderColor: 'blue', borderWidth: 1, alignSelf: 'center', padding: 1 }}>SUBSCRIBE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ alignSelf: 'center', fontSize: 16, color: 'yellow' }}>Kids</Text>
                        </TouchableOpacity>
                    </View>
                </Body>
                <Right style={{ flex: 0.4 }}>
                    <SearchScreen {...this.props} />
                </Right>
            </Header>
        );
    }
}