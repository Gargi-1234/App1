import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from "./TabNavigator.js"
import Profile from "../screens/Profile.js";
import ToDoList from '../screens/ToDoList.js';

const Drawer = createDrawerNavigator();

const DrawerNavigator=()=>{
    return(
        <Drawer.Navigator
        screenOptions={{
            headerShowen : false
        }}
        >
            <Drawer.Screen
            name = "home" component={TabNavigator}

            />
             <Drawer.Screen
            name = "profile" component={Profile}
            
            />
               <Drawer.Screen
            name = "ToDoList" component={ToDoList}
            
            />
            
        </Drawer.Navigator>
    )
}

export default DrawerNavigator