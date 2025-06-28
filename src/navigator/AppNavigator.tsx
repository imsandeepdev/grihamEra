import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../screens/Login';
import Home from '../screens/Home';
import RoomDetail from '../screens/RoomDetail';
import {Colors} from '../assets';
import {Image, Platform} from 'react-native';
import {Icons} from '../assets/Images';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false, animationEnabled: true}}>
        <Stack.Screen name={'LoginScreen'} component={Login} />
        <Stack.Screen name={'HomeScreen'} component={RenderTabNavigation} />
        <Stack.Screen name={'RoomDetail'} component={RoomDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const TabConfig: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarActiveTintColor: Colors.Red,
  tabBarInactiveTintColor: Colors.White,
  tabBarStyle: {
    backgroundColor: Colors.White,
    borderTopWidth: 0,
    ...Platform.select({
      android: {
        height: 70,
        paddingBottom: 16,
        // height: 110,
        // paddingBottom: 56,
      },
      ios: {
        height: 90,
        paddingBottom: 36,
      },
    }),
  },
};

const RenderTabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Dashboard" screenOptions={() => TabConfig}>
      <Tab.Screen
        name={'Dashboard'}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={Icons.Home}
                resizeMode={'contain'}
                style={{height: 20, width: 20}}
              />
            ) : (
              <Image
                source={Icons.InHome}
                resizeMode={'contain'}
                style={{height: 20, width: 20}}
              />
            ),
        }}
        component={Home}
      />

      <Tab.Screen
        name={'Accounts'}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={Icons.Home}
                resizeMode={'contain'}
                style={{height: 20, width: 20}}
              />
            ) : (
              <Image
                source={Icons.InHome}
                resizeMode={'contain'}
                style={{height: 20, width: 20}}
              />
            ),
        }}
        component={Home}
      />

      <Tab.Screen
        name={'Payments'}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={Icons.Home}
                resizeMode={'contain'}
                style={{height: 20, width: 20}}
              />
            ) : (
              <Image
                source={Icons.InHome}
                resizeMode={'contain'}
                style={{height: 20, width: 20}}
              />
            ),
        }}
        component={Home}
      />
      <Tab.Screen
        name={'Lifestyle'}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={Icons.Home}
                resizeMode={'contain'}
                style={{height: 20, width: 20}}
              />
            ) : (
              <Image
                source={Icons.InHome}
                resizeMode={'contain'}
                style={{height: 20, width: 20}}
              />
            ),
        }}
        component={Home}
      />
      <Tab.Screen
        name={'Help'}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={Icons.Home}
                resizeMode={'contain'}
                style={{height: 20, width: 20}}
              />
            ) : (
              <Image
                source={Icons.InHome}
                resizeMode={'contain'}
                style={{height: 20, width: 20}}
              />
            ),
        }}
        component={Home}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
