import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../screens/Login';
import Home from '../screens/Home';
import RoomDetail from '../screens/RoomDetail';

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false, animationEnabled: true}}>
        <Stack.Screen name={'LoginScreen'} component={Login} />
        <Stack.Screen name={'HomeScreen'} component={Home} />
        <Stack.Screen name={'RoomDetail'} component={RoomDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
