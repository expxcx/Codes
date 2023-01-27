import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Detalhes() {
   return (
      <View style={styles.container}>
         <Text>Página Detalhes</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   }
})