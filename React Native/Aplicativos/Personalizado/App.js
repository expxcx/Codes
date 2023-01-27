import React, { useState } from 'react';
import { Image, Modal, Text, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function appPersonalizado() {

   const[visibleModal, setVisibleModal] = useState(false);

   return (
      <SafeAreaView style={styles.container}>
         <StatusBar/>
         <View style={styles.areaTitulo}>
            <Text style={styles.txtTitulo}>Eric Pereira Cândido</Text>
            <Image
               source={require('./src/img/ft.png')}
               style={styles.imagem}
            >
            </Image>
         </View>
         <View style={styles.btnArea}>
            <TouchableOpacity style={styles.btn} onPress={() => setVisibleModal(true)}>
               <Text style={styles.btnTexto}>SAIBA MAIS</Text>
            </TouchableOpacity>
         </View>
         <Modal
            transparent = {true}
            animationType= 'slide'
            visible = {visibleModal}
         >
            <View style={styles.viewModal}>
               <Text style={styles.txtModal}>
                  {'Moro em Maceió, cursando o 6º período no curso de Sistemas de Informação na Estácio.\n'}
                  {'Como experiência profissional, estagiei por quase 2 anos no Setor de Normas e Legislação da Secretaria Municipal de Educação de Maceió.\n'}
               </Text>
               <TouchableOpacity style={styles.btnModal} onPress={() => setVisibleModal(false)}>
                  <Text style={styles.btnTexto}>VOLTAR</Text>
               </TouchableOpacity>
            </View>
         </Modal>
      </SafeAreaView>
   );
}
const styles = StyleSheet.create({
   container:{
      flex: 1,
      backgroundColor: '#050627ff',
   },
   areaTitulo: {
      marginTop: 50,                  
      alignItems: 'center',
      justifyContent: 'center'
   },
   txtTitulo: {
      color: '#cfdef3ff',
      fontSize: 30,
      fontWeight: 'bold'
   },
   imagem: {
      marginTop: 25,
      height: 150,
      width: 150
   },
   btnArea:{
      marginTop: 50,         
      alignItems: 'center',
   },
   btn:{
      width: 100,
      height: 40,
      backgroundColor: '#0051ff',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10
   },
   btnTexto:{
      color: '#ffffff',
      fontWeight: 'bold'
   },
   viewModal:{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: '#cfdef3ff',
      marginTop: 275,      
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10
   },
   txtModal:{
      fontSize: 18,
      textAlign: 'justify',      
      color: '#050627ff',    
      padding: 5,
   },
   btnModal:{
      width: '100%',
      height: 40,
      backgroundColor: '#0051ff',         
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
   }
})