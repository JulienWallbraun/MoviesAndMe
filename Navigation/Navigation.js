//import { createStackNavigator, createAppContainer } from "@react-navigation/stack"
import { NavigationContainer, NavigationNativeContainer, StackActions } from "@react-navigation/native"
import React from "react";
import Search from '../Components/Search'
import { render } from "react-dom"
/*
const SearchStackNavigator = createStackNavigator({
  Search: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
    screen: Search,
    navigationOptions: {
      title: 'Rechercher'
    }
  }
})

// Navigation/Navigation.js

export default createAppContainer(SearchStackNavigator)
*/
const stackNavigator = createStackNavigator()
export default class Navigation extends React.Component {


render(){
  return <NavigationNativeContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component="teeeeeeeest"></Stack.Screen>
    </Stack.Navigator>
  </NavigationNativeContainer>
}
}