import React from "react"

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../homeScreen'
import SettingsScreen from '../GetStarted'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const TabBottom = createMaterialTopTabNavigator();


// const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
    return (
        <TabBottom.Navigator
            tabBarPosition={'bottom'}
            tabBarOptions={{
                labelStyle: { fontSize: 10 ,borderBottomWidth:0},
                // style: { backgroundColor: 'powderblue' ,borderWidth:0,borderBottomColor:'transparent',elevation:0},
                showIcon: true,
               tabStyle : { backgroundColor: 'powderblue' ,borderWidth:0,borderBottomColor:'transparent'},

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
            <TabBottom.Screen name="Settings" component={SettingsScreen}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={24} />
                    ),
                }}
            />
        </TabBottom.Navigator>
    );
}