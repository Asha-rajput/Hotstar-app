import { hasIn } from 'ramda'
import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'



class DrawerScreen extends React.Component {

    closeDrawer() {
        console.log('==========', this.props.navigation)
        this.props.navigation.closeDrawer()
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#0C111B' }}>
                <View style={{
                    margin: 20, marginBottom: 15, justifyContent: 'center', borderBottomColor: 'black', padding: 10,
                    borderBottomWidth: 1
                }}>
                    <Text style={{
                        fontSize: 18, fontWeight
                            : 'bold', color: 'white'
                    }}>My Account</Text>
                    <Text style={{ color: '#AAA', fontSize: 18, paddingBottom: 22 }}>+91 9808102373</Text>
                    <TouchableOpacity style={{ position: 'absolute', right: -20, padding: 10 }} onPress={() => this.closeDrawer()}>
                        < AntDesign name='right' color={'gray'} size={18} />
                    </TouchableOpacity>
                </View>
                <View style={styles.Viewstyle}>
                    <View style={{ flexDirection: 'row' }}>
                        <Entypo name='download' size={22} color={'#c2c2a3'} style={{ alignSelf: 'center' }}></Entypo>
                        <View >
                            <Text style={styles.text}>Downloads</Text>
                            <Text style={{ marginLeft: 10, color: 'gray' }}>watch videos offline</Text>
                        </View>
                    </View>
                </View>
                {/* <View style={styles.Viewstyle}>
                    <Entypo name='download' size={22} color={'#c2c2a3'} style={{ alignSelf: 'center' }}></Entypo>
                    
                    <Text style={styles.text}>Downloads</Text>
                    {/* <Text style={{ color: 'gray' }}>watch videos offline</Text> */}

                {/* </View> */}
                <View style={styles.Viewstyle}>
                    <MaterialCommunityIcons name='movie-open' size={22} color={'#c2c2a3'} style={{ alignSelf: 'center' }} ></MaterialCommunityIcons>

                    <Text style={styles.text}>Movies</Text>
                </View>
                <View style={styles.Viewstyle}>
                    <Entypo name='flash' size={22} color={'#c2c2a3'} style={{ alignSelf: 'center' }} ></Entypo>
                    <Text style={styles.text}>Trending</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Viewstyle: {
        marginLeft: 20,
        marginBottom: 20,
        flexDirection: 'row'
    },
    text: {
        marginLeft: 10,
        fontSize: 18,
        color: 'white',
        fontWeight: '500'
    }
})


export default DrawerScreen
