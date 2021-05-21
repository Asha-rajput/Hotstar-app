import React from "react"
import { Image } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../homeScreen'
// import SettingsScreen from '../GetStarted'
import TvScreen from '../TvScreen'
import DisnepScreen from '../DisnepScreen'
import SportScreen from './../SportScreen'
import NewsScreen from './../NewsScreen'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';



import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { Image } from "native-base";
const TabBottom = createMaterialTopTabNavigator();


// const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
    return (
        <TabBottom.Navigator

            tabBarPosition={'bottom'}
            tabBarOptions={{
                activeTintColor: 'white',
                labelStyle: {  textTransform: 'none' ,fontSize: 10, borderBottomWidth: 0 },
                // style: { backgroundColor: 'powderblue' ,borderWidth:0,borderBottomColor:'transparent',elevation:0},
                showIcon: true,
                tabStyle: { backgroundColor: '#121926', borderWidth: 0, borderBottomColor: 'transparent' },

            }}
        >
            <TabBottom.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',

                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={24} />
                    ),
                }}
            />

            <TabBottom.Screen name="TvScreen" component={TvScreen}
                options={{
                    tabBarLabel: 'TV',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="live-tv" color={color} size={24} />
                    ),
                }}
            />
            <TabBottom.Screen name="DisnepScreen" component={DisnepScreen}
                options={{
                    tabBarLabel: 'Disnep+',
                    tabBarIcon: ({ color }) => (
                        <Image style={{ width: 35, height: 25, resizeMode: 'stretch', alignSelf: 'center' }}
                            source={require('./../../Hotstar/A2.png')} />
                    )

                }}
            />

            <TabBottom.Screen name="SportScreen" component={SportScreen}
                options={{
                    tabBarLabel: 'Sports',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="sports-cricket" color={color} size={24} />

                    )

                }}
            />

            <TabBottom.Screen name="NewsScreen" component={NewsScreen}
                options={{
                    tabBarLabel: 'News',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="newspaper-outline" color={color} size={24} />

                    )

                }}
            />


        </TabBottom.Navigator>
    );
}