import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AdminDashboard from '../component/AdminDashboard';
import Settings from '../component/Settings';

const Drawer = createDrawerNavigator();

function DrawerNavigator (){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name = 'Dashboard' component = {AdminDashboard}/>
            <Drawer.Screen name = 'Settings' component = {Settings}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;