import React, { Component } from 'react';
import { View } from 'react-native';
import {Portal, Provider, Modal} from 'react-native-paper'
import AdminDashboardStyles from '../style/AdminDashboardStyles';
import Form from './Form';
import Topbar from './Topbar';

class AdminDashboard extends Component{
    constructor(props) {
        super(props)
        this.state = {
            showForm : false
        }
    }
    
    handleMenu = () => {
        this.props.navigation.openDrawer()
    }

    handlePlus = () => {
       this.setState({ showForm : true })
    }

    hideForm = () => {
        this.setState({ showForm : false })
    }

    render(){
        return(
            <Provider>
                <View style = {AdminDashboardStyles.container}>
                    <Topbar 
                        showMenu = {true}
                        onPressMenuButton = {this.handleMenu}
                        showPlusButton = {true}
                        onPressPlusButton = {this.handlePlus}
                        heading = 'DASHBOARD'/>
                    <Portal>
                        <Modal 
                            visible = {this.state.showForm}
                            onDismiss = {this.hideForm}
                            contentContainerStyle = {{width : '80%', backgroundColor : 'white', justifyContent : 'center', alignSelf : 'center', padding : 20}}>
                            <Form onDismiss = {this.hideForm}/>
                        </Modal>
                    </Portal>
                    
                </View>
            </Provider>
        )
    }
}

export default AdminDashboard;