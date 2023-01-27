import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Routes from "./src/Routes";

export default function App(){

  return(
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  )
}