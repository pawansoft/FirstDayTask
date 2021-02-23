import React from 'react';
import { Text, View } from 'react-native';
import Topbar from './Topbar';

const Settings = ({...props}) => {
    return(
        <View>
            <Topbar 
                showMenu = {true}
                navigation = {props.navigation}
                heading = 'SETTINGS'/>
            <Text>
                SETTINGS
            </Text>
        </View>
    )
}

export default Settings;