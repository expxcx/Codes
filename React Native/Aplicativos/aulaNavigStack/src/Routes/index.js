import React from "react"

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons'

import Home from "../Pages/Home"
import Sobre from "../Pages/Sobre"
import Contato from "../Pages/Contato";
import StackRoutes from "./StackRoutes";

export default function Routes(){

   const Tab = createBottomTabNavigator();

   return (
      <Tab.Navigator
         screenOptions={{
            headerShown: true,
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: true,
            tabBarActiveTintColor: '#ff0000',
            tabBarInactiveTintColor: 'white',
            tabBarStyle:{
               backgroundColor: '#0d2447',
               borderTopWidth: 0
            },
            headerStyle: { backgroundColor: '#0d2447' },
            headerTintColor: 'white',
         }}
      >
         <Tab.Screen
            name="Home"
            component={StackRoutes}
            options={{
               tabBarIcon: ({color, size}) => {
                  return <Ionicons name="home" size={size} color={color}/>
               }
            }}
         />
         <Tab.Screen
            name="Sobre"
            component={Sobre}
            options={{
               tabBarIcon:({color,size})=>{
                  return <AntDesign name="filetext1" size={size} color={color}/>
               }
            }}
         />
         <Tab.Screen
            name="Contato"
            component={Contato}
            options={{
               tabBarIcon:({color,size})=>{
                  return <Feather name="phone" size={size} color={color}/>
               }
            }}
         />
      </Tab.Navigator>
   )
}