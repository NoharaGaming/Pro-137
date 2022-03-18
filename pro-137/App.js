import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createAppContainer, createSwitchNavigator} from "react-navigation"
import Home from "./screens/home"
import Details from "./screens/Details"

const Navigation = createSwitchNavigator({
   Details:Details,
   Home:Home,
 
})
const AppContainer = createAppContainer(Navigation)


export default class App extends React.Component {


  render(){
  return (
  <AppContainer />
  );
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

