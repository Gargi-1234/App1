import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Activities from "../screens/Activities";
import Planning from "../screens/Planning";
import Studies from "../screens/Planning";
import Sports from '../screens/Sports';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator=()=>{
    return(
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'HomeScreen') {
              iconName = focused 
                ? 'home'
                : 'home-outline';
            } 
             else if (route.name === 'Activities') {
              iconName = focused
                ? 'documents'
                : 'documents-outline';
            } else if (route.name === 'Planning') {
              iconName = focused ? 'create' : 'create-outline';
            } else if (route.name === 'Studies') {
              iconName = focused 
                ? 'book'
                : 'book-outline';
            } else if (route.name === 'Sports') {
              iconName = focused 
                ? 'ios-football'
                : 'ios-football-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
        <Tab.Screen name="Activities" component={Activities} options={{headerShown:false}}/>
        <Tab.Screen name="Planning" component={Planning} options={{headerShown:false}}/>
        <Tab.Screen name="Studies" component={Studies} options={{headerShown:false}}/>
        <Tab.Screen name="Sports" component={Sports} options={{headerShown:false}}/>
      </Tab.Navigator>
    )
}

export default BottomTabNavigator