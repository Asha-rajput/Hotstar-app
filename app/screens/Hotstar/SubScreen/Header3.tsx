import React, { Component } from 'react';
import { TouchableOpacity, Image, View, Button } from 'react-native'
import { Container, Header, Left, Body, Right, Icon, Title, Text } from 'native-base';
// import Feather from 'react-native-vector-icons/Feather';
import Menu from './Menu'
import SearchScreen  from './SearchIcon'


export default class HeaderMultipleIconExample extends Component {
    
    render() {
        return (
            // <Container style={{backgroundColor:'red'}}>
                <Header style={{ backgroundColor: '#121926' }}>
                    <Left style={{ flex: 0.5 }}>
                        <Menu {...this.props} />
                        {/* <TouchableOpacity onPress={() => this.nav()} style={{ margin: 10 }} >
                            <Feather size={28} color={'white'} name="menu" />
                        </TouchableOpacity> */}
                    </Left>
                    <Body style={{ flex: 3.5}}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                            <Text style={{color:'white',fontSize:25,marginLeft:10,fontWeight:'bold'}}>hotstar</Text>
                                                    </View>

                    </Body>
                    <Right style={{ flex: 0.4, }}>
                    <SearchScreen {...this.props} />
                        
                    </Right>
                </Header>
            // </Container >
        );
    }
}