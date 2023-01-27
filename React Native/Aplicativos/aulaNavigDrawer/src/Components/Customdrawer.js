import React from 'react';
import { View, Text, Image, StatusBar, StyleSheet } from 'react-native';
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'

export default function Customdrawer(props) {
 return (
   <DrawerContentScrollView {...props}>
      <StatusBar/>
      <View style={styles.container}>         
         <Text style={styles.textoPerfil}>Bem-Vindo</Text>
         <Image         
            style={styles.imagem}
            source={require('../assets/perfil.png')}
         />
      </View>
      <DrawerItemList {...props}/>
   </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
      marginBottom: 30
   },
   imagem: {
      height: 50,
      width: 50
   },
   textoPerfil:{
      fontSize: 15,
      fontWeight: 'bold',
      color: '#fff',
      marginVertical: 10,
      marginBottom: 10
   }
})