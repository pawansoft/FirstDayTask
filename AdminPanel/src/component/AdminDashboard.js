import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import {IconButton} from 'react-native-paper'
import AdminDashboardStyles from '../style/AdminDashboardStyles';
import GlobalStyleConstants from '../style/GlobalStyleConstant';
import StudentList from './StudentList';
import Topbar from './Topbar';

class AdminDashboard extends Component{
    constructor(props) {
        super(props)
        this.state = {
            studentList: [['Radha', 'Krishna', '9999999999', 'radha@gmail.com'],
                            ['Krishna', 'Prasad', '9999999999', 'radha@gmail.com'],
                            ['Ram', 'Prasad', '9999999999', 'radha@gmail.com'],
                            ['Sita', 'Sita', '9999999999', 'radha@gmail.com']]
        }
    }

    addDataToStudentList = (studentDetails) => {
        this.setState({
            studentList : this.state.studentList.push(studentDetails)
        })
        
    }

    handlePlusButton = () => {
        this.props.navigation.push('CreateList', {saveDetail : this.addDataToStudentList});
    }

    render(){
        return(
            <View style = {AdminDashboardStyles.container}>
                <Topbar 
                    showMenu = {true}
                    navigation = {this.props.navigation}
                    showProfile = {true}
                    heading = 'DASHBOARD'/>
                <View style = {{flexDirection : 'row', justifyContent : 'space-between', marginTop : 10, alignItems : 'center'}}>
                    <Text style = {{fontSize : 16, marginLeft : 10, fontWeight : 'bold'}}>
                        List Page
                    </Text>
                    <IconButton icon = "plus" 
                    style = {{marginRight : 10, backgroundColor : GlobalStyleConstants.PrimaryColor}} 
                    color = 'white'
                    onPress = {this.handlePlusButton}/>
                </View>
                    <StudentList studentList = {this.state.studentList}/>
            </View>
            
        )
    }
}

export default AdminDashboard;