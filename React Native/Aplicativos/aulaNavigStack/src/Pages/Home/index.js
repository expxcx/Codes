import React from 'react';
import {useNavigation} from '@react-navigation/native'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home() {

   const navigation = useNavigation();

   function navegaDetalhes(){
      navigation.navigate('Detalhes');
   }

   return (
      <View style = {styles.container}>
         <Text>TELA HOME</Text>
         <TouchableOpacity style={styles.btnHome} onPress={navegaDetalhes}>
            <Text>IR PARA DETALHES</Text>            
         </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
   container:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   btnHome:{
      width: 140,
      marginTop: 10,
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 10,
      backgroundColor: 'lightgray'
   }
})