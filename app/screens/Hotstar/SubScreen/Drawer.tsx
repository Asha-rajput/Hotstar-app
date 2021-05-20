import React from "react"

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DrawerScreen from './DrawerScreen'
import HomeScreen from '../homeScreen'
import MyTabs from './TabNavigation'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator initialRouteName="HomeScreen" drawerContent={() => <DrawerScreen />}>
      <Drawer.Screen name="HomeScreen" component={MyTabs} />
    </Drawer.Navigator>
  );
}

// const MyDrawerNavigator = createDrawerNavigator({
//     homeScreen: {
//         screen: homeScreen,
//   },
// },{
//     contentComponent:DrawerScreen,
//     drawerWidth:300,
//     headerMode:'none',
// }
// )

// //   const MyApp = createAppContainer(MyDrawerNavigator);
// export default MyDrawerNavigator