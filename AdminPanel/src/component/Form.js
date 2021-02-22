import React, { Component } from 'react'
import { View, Text,  TextInput } from 'react-native'
import { Button, } from 'react-native-paper'
export default class Form extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name : "",
            phoneNumber : "",
            emailId : '',
        }
    }

    handleName = (name) => {
        this.setState ({name : name})
    }

    handlePhoneNumber = (phoneNumber) => {
        this.setState ({phoneNumber : phoneNumber})
    }

    handleEmailId = (emailId) => {
        this.setState ({emailId : emailId})
    }

    onSubmit = () => {
        console.log(this.state);
        this.props.onDismiss()
    }

    render() {
        return (
            <View>
                <Text style = {{alignSelf : 'center'}}>Form</Text>
                <TextInput  placeholder = 'Name'/>
               <TextInput placeholder = 'Phone Number'/>
               <TextInput placeholder = 'Email Id'/>
               <Button onPress = {this.onSubmit}>
                   Submit
               </Button>
            </View>
        )
    }
}