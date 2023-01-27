import React from "react";
import {} from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../Pages/Home";
import Detalhes from "../Detalhes";

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
            name="Detalhes"
            component={Detalhes}
         />
      </Stack.Navigator>
  );
}