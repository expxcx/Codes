import React from "react"
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from "../Pages/Home";
import Sobre from "../Pages/Sobre"
import Contato from "../Pages/Contato";
import StackRoutes from "./StackRoutes";
import Customdrawer from "../Components/Customdrawer";

export default function Routes(){

   const Drawer = createDrawerNavigator();

   return (
      <Drawer.Navigator
         drawerContent={Customdrawer}
         screenOptions={{
            headerShown: true,
            drawerStyle:{
               backgroundColor: '#121212'
            },
            drawerActiveBackgroundColor: '#3B3DBF',
            drawerActiveTintColor: '#fff',
            drawerInactiveBackgroundColor: '#CCC',
            drawerInactiveTintColor: '#000'
         }}
      >
         <Drawer.Screen
            name='Home-Stack'
            component={StackRoutes}
            options={{
               title: 'Inicio'
            }}
         />
         <Drawer.Screen
            name='Sobre'
            component={Sobre}
         />
         <Drawer.Screen
            name='Contatos'
            component={Contato}
         />
      </Drawer.Navigator>
   )
}