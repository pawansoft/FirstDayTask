import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import ApplicationStack from '../AdminPanel/src/navigation/ApplicationStack'

class App extends Component{
  render(){
  return (
      <ApplicationStack/>
  );
}
};

export default App;
