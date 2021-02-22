import React from 'react';
import 'react-native-gesture-handler';
import{NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from  '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

function ApplicationStack(){
    return(
       <NavigationContainer>
        <Stack.Navigator
        screenOptions = {{headerShown : false}}>
            <Stack.Screen name = "Drawer" component = {DrawerNavigator}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ApplicationStack;