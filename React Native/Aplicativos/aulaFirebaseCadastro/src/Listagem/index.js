import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Listagem({data}) {
 return (
   <View style = {styles.container}>
    <Text style={styles.texto}>{data.nome}</Text>
    <Text style={styles.texto}>{data.cargo}</Text>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#73ff00',
    marginTop: 10,
    padding: 8
  },
  texto:{
    color: '#010020',
    fontSize: 18
  }
})