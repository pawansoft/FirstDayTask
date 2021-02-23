import React from 'react'
import { Appbar, Avatar } from 'react-native-paper'
import GlobalStyleConstants from '../style/GlobalStyleConstant'
import TopbarStyle from '../style/TopbarStyle'

const Topbar = ({...props}) => {

    const handleMenu = () => {
        props.navigation.openDrawer()
    }

    const handleBackbutton = () => {
        props.navigation.push('Drawer', {screen : 'Dashboard'})
    }

    return (
        <Appbar style = {TopbarStyle.container}>
            {props.showMenu != undefined ?
                <Appbar.Action 
                    icon = 'menu'
                    color = {GlobalStyleConstants.PrimaryFontColor}
                    onPress = {handleMenu}/>
                :
                null
            }

            {props.backbutton != undefined ? 
                <Appbar.Action 
                icon = 'keyboard-backspace'
                color = {GlobalStyleConstants.PrimaryFontColor}
                onPress = {handleBackbutton}/>
            :
            null
            }
            <Appbar.Content title = {props.heading} color = {GlobalStyleConstants.PrimaryFontColor}/>
            {props.showProfile != undefined ? 
               <Avatar.Image 
                size = {35} 
                source = {require('../assets/DefaultImage.jpg')}
                style = {{marginRight : 10}}/>
                :
                null
            }
        </Appbar>
    )
}

export default Topbar