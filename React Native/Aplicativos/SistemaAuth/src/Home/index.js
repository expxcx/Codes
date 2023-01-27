import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'

export default function Home() {

   const navigation = useNavigation();

   function paginaLogin(){
      navigation.navigate('Login');
   }
   function paginaCadastro(){
      navigation.navigate('Cadastro');
   }

   return (
      <View style = {styles.container}>
         <TouchableOpacity style={styles.btnLogin} onPress={paginaLogin}>
            <Text style={styles.btnTexto}>EFETUAR LOGIN</Text>          
         </TouchableOpacity>
         <TouchableOpacity style={styles.btnCadastro} onPress={paginaCadastro}>
            <Text style={styles.btnTexto}>NOVO CADASTRO</Text>            
         </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
   container:{
      flex:1,
      alignItems: 'center',
      backgroundColor: '#dbdbdb',
   },
   btnTexto:{
      color: '#0d2447',
      fontSize: 20,
      fontWeight: 'bold'
   },
   btnLogin:{
      marginTop: 150,
      borderWidth: 0,
      backgroundColor: '#dbdbdb'
   },
   btnCadastro:{
      marginTop: 50,
      borderWidth: 0,
      backgroundColor: '#dbdbdb'
   }
})