import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import MyRequestScreen from '../screens/MyRequestScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SettingScreen from '../screens/SettingScreen';
import {Icon} from 'react-native-elements';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator,
    navigationOptions: {
      drawerIcon : <Icon name="home" type ="fontawesome5" />
    }
    },
  MyRequests : {
    screen : MyRequestScreen,
    navigationOptions: {
      drawerIcon : <Icon name="gift" type ="fontawesome5" />,
      drawerLabel : "My Requests"
    }
  },
  Notification : {
    screen : NotificationScreen,
    navigationOptions: {
      drawerIcon : <Icon name="bell" type ="fontawesome5" />,
      drawerLabel : "Notifications"
    }
  },
  
  Setting : {
    screen : SettingScreen,
    navigationOptions: {
      drawerIcon : <Icon name="settings" type ="fontawesome5" />,
      drawerLabel : "Settings"
    }
  }
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
