import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import { Button, Card, } from 'react-native-paper'
import FormStyle from '../style/FormStyle';
import GlobalStyleConstants from '../style/GlobalStyleConstant';
import Topbar from './Topbar';
export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            phoneNumber: "",
            emailId: "",
        }
    }

    handleFirstName = (first_name) => {
        this.setState({ first_name: first_name })
    }

    handleLastName = (last_name) => {
        this.setState({ last_name: last_name })
    }

    handlePhoneNumber = (phoneNumber) => {
        this.setState({ phoneNumber: phoneNumber })
    }

    handleEmailId = (emailId) => {
        this.setState({ emailId: emailId })
    }

    onSubmit = () => {
        this.props.route.params.saveDetail([this.state.first_name, this.state.last_name, this.state.phoneNumber, this.state.emailId])
        this.handleCancel()
    }

    handleCancel = () => {
        this.props.navigation.navigate('Drawer', {screen : 'Dashboard'})
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Topbar
                    navigation={this.props.navigation}
                    backbutton={true}
                    heading='CREATE LIST' />
                <View style={FormStyle.card_container_style}>
                    <Card style={FormStyle.card_style}>
                        <Card.Content>

                            <View style={FormStyle.name_container_style}>
                                <TextInput 
                                    placeholder='First Name' 
                                    style={FormStyle.name_text_input} 
                                    onChangeText = {this.handleFirstName} />
                                <TextInput 
                                    placeholder='Last Name' 
                                    style={FormStyle.name_text_input} 
                                    onChangeText = {this.handleLastName}/>
                            </View>

                            <TextInput 
                                placeholder='Phone Number' 
                                style={FormStyle.text_input} 
                                onChangeText= {this.handlePhoneNumber}/>
                            <TextInput 
                                placeholder='Email Id' 
                                style={FormStyle.text_input} 
                                onChangeText = {this.handleEmailId}/>
                            <View style={FormStyle.button_container}>
                                <Button 
                                    onPress={this.handleCancel} 
                                    style={FormStyle.button} 
                                    labelStyle={{ color: GlobalStyleConstants.PrimaryFontColor }}>
                                    cancel
                                </Button>
                                <Button 
                                    onPress={this.onSubmit} 
                                    style={FormStyle.button} 
                                    labelStyle={{ color: GlobalStyleConstants.PrimaryFontColor }}>
                                    Submit
                                </Button>
                            </View>
                        </Card.Content>
                    </Card>
                </View>
            </View>
        )
    }
}