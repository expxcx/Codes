import React from "react"

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import StackRoutes from "./StackRoutes"

export default function Rotas(){

   const Tab = createMaterialTopTabNavigator();

   return (
      <Tab.Navigator
         screenOptions={{
            headerShown: true,
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: true,
            tabBarActiveTintColor: '#dbdbdb',
            tabBarStyle:{
               backgroundColor: '#0d2447',
               borderTopWidth: 0
            },
            headerStyle: { backgroundColor: '#0d2447' }
         }}
      >
         <Tab.Screen
            name="Sistema de Autenticação"
            component={StackRoutes}
         />
      </Tab.Navigator>
   )
}