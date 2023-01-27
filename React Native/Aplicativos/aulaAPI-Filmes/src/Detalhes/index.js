import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Detalhes(props) {
   return (
      <View style={styles.container}>
         <View style={styles.viewModal}>
            <TouchableOpacity style={styles.btn} onPress={props.voltar}>
               <Text style={styles.btntext}>VOLTAR</Text>
            </TouchableOpacity>
            <Text style={styles.titulo}>{props.filme.nome}</Text>
            <Text style={styles.sinopse}>Sinopse</Text>
            <Text style={styles.descricao}>{props.filme.sinopse}</Text>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   container:{
      flex:1,
      justifyContent: 'flex-end',
      alignItems: 'center' 
   },
   viewModal:{
      height: '60%',
      width: '80%',
      backgroundColor: '#121212',
      borderRadius: 10
   },
   btn:{
      backgroundColor: '#E52246',
      padding: 10,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      justifyContent: 'center',
      alignItems: 'center'
   },
   btntext:{
      color:'#fff',
      fontSize: 18,
      fontWeight: 'bold'
   },
   titulo:{
      color: '#fff',
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      padding: 10
   },
   sinopse:{
      color: '#fff',
      fontSize: 15,
      fontWeight: '700',
      marginLeft: 8,
      marginBottom: 10
   },
   descricao:{
      color: '#fff',
      fontSize: 15,
      margin: 5,
      textAlign: 'justify'
   }
});