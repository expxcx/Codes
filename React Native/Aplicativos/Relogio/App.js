import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function App() {
  
   const [saida,setSaida] = useState('00:00:00')

   function getHours(){
      const data = new Date();
      let hora = data.getHours();
      let minuto = data.getMinutes();
      let segundos = data.getSeconds();

      let format = (hora<10? "0" + hora: hora) + ":" + (minuto<10? "0" + minuto: minuto) + ":" + (segundos<10? "0" + segundos: segundos);
      setSaida(format);
   }
   
   setInterval(()=> {
      getHours();
   }, 1000);

   return (
      <View style={styles.container}>
         <StatusBar style="auto" />
         <Text style={styles.digito}>{saida}</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#000000ff',
      alignItems: 'center',
      justifyContent: 'center',
   },
   digito:{
      color: '#4cff3cff',
      fontSize: 50
   }
});