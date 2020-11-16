import 'react-native-gesture-handler';
import React from 'react'
import Search from './Components/Search'
import FilmDetails from './Components/FilmDetail'
//import Navigation from './Navigation/Navigation'
import { createStackNavigator } from "@react-navigation/stack"
import {NavigationContainer} from '@react-navigation/native'
/*
export default class App extends React.Component {
  render() {
    return (
      <Navigation/>
    )
  }
}
*/

const Stack = createStackNavigator()  

export default function App(){
  return (
      
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Rechercher" component={Search}/>
          <Stack.Screen name="Détails du film" component={FilmDetails}/>
        </Stack.Navigator>
      </NavigationContainer>
      
  )
}
