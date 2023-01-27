import React from "react";
import {} from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Cadastro from "../Cadastro";
import Login from "../Login";
import Home from "../Home";

export default function StackRoutes() {

   const Stack = createNativeStackNavigator();
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="Home-route"
            component={Home}
            options={{
               headerShown: false
            }}
         />
         <Stack.Screen
            name="Login"
            component={Login}
            options={{
               headerTintColor: '#0d2447',
               headerTitleAlign: 'center',
               headerStyle: {
                  backgroundColor: '#dbdbdb',
               }
            }}
         />
         
         <Stack.Screen
            name="Cadastro"
            component={Cadastro}
            options={{
               headerTintColor: '#0d2447',
               headerTitleAlign: 'center',
               headerStyle: {
                  backgroundColor: '#dbdbdb',
               }
            }}
         />
      </Stack.Navigator>
  );
}