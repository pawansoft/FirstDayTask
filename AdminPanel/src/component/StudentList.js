import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import StudentListStyle from '../style/StudentListStyle';

class StudentList extends Component{
    constructor(props) {
        super(props);
        this.state = {
          tableHead: ['First Name', 'Last Name', 'Phone', 'Email'],
          tableData: this.props.studentList
        }
      }
     
      render() {
        const state = this.state;
        return (
         <ScrollView>
            <View style={StudentListStyle.container}>
                <Table borderStyle={StudentListStyle.table_border_style}>
                <Row data={state.tableHead} style={StudentListStyle.head} textStyle={StudentListStyle.text}/>
                <Rows data={state.tableData} textStyle={StudentListStyle.text}/>
                </Table>
            </View>
          </ScrollView>
        )
      }
}


export default StudentList;