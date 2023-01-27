import React, {useEffect, useRef} from 'react';
import { Animated, SafeAreaView, StatusBar, Text, View } from 'react-native';

export default function App() {

   const largAnimada = useRef(new Animated.Value(0)).current;
   const altuAnimada = useRef(new Animated.Value(0)).current;
   
   useEffect(()=>{
         Animated.parallel([
               Animated.timing(largAnimada, {
                  toValue: 100,
                  duration: 4000,
                  useNativeDriver: false
               }),
               Animated.timing(altuAnimada, {
                  toValue: 100,
                  duration: 4000,
                  useNativeDriver: false
               }),
         ]).start(()=>{
            alert('Acabou Animação')
         });
   },[])

   let porcentLargura = largAnimada.interpolate({
      inputRange: [0,100],
      outputRange: ['0%', '100%']
   });

   let porcentAltura = altuAnimada.interpolate({
      inputRange: [0,100],
      outputRange: ['0%', '100%']
   });

   return (
      <SafeAreaView style={{
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center'
      }}>
         <StatusBar/>
         <Animated.View style={{
            width: porcentLargura,
            height: porcentAltura,
            backgroundColor: '#1469e1',
            justifyContent: 'center',
         }}>         
            <Text style={{
               textAlign: 'center',
               fontSize: 22,
               color: '#fff'
            }}>
               Carregando...
            </Text>
         </Animated.View>
      </SafeAreaView>   
   )   
}