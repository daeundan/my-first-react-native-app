import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import GuideOne from '../screens/GuideOne';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
       >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: '홈' }}
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{ title: '프로필' }}
        />
        <Stack.Screen 
          name="GuideOne" 
          component={GuideOne}
          options={{ title: '가이드01' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}