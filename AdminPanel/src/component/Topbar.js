import React from 'react'
import { Appbar } from 'react-native-paper'

const Topbar = ({...props}) => {
    return (
        <Appbar>
            {props.showMenu != undefined ?
                <Appbar.Action 
                    icon = 'menu'
                    onPress = {props.onPressMenuButton}/>
                :
                null
            }
            <Appbar.Content title = {props.heading}/>
            {props.showPlusButton != undefined ? 
                <Appbar.Action 
                    icon = 'plus'
                    onPress = {props.onPressPlusButton} />
                :
                null
            }
        </Appbar>
    )
}

export default Topbar