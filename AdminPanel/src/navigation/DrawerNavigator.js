import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AdminDashboard from '../component/AdminDashboard';

const Drawer = createDrawerNavigator();

function DrawerNavigator (){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name = 'AdminDashboard' component = {AdminDashboard}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;