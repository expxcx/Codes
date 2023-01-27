import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Rotas from './src/Rotas';

export default function SistemaAuth() {
	return (
	<NavigationContainer>
         <StatusBar/>
         <Rotas/>
      </NavigationContainer>
	);
}