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
      <View style={styles.btnArea}>
         <TouchableOpacity
            style={styles.btn}            
            onPress={navegaDetalhes}
         >
            <Text>'IR PARA DETALHES'</Text>
         </TouchableOpacity>
         <TouchableOpacity
            style={styles.btn}
            onPress={()=> navigation.openDrawer()}
         >
            <Text>'IR PARA DRAWER'</Text>
         </TouchableOpacity>
      </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        backgroundColor: 'orange'
    },
    btn: {
      height: 50,
      width: 150,
      backgroundColor: '#198fddff',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      marginLeft: 5
    },
    btnArea: {
      flexDirection: 'row',
      marginTop: 100,
    }
})