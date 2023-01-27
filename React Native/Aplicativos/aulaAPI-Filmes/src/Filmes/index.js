import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import Detalhes from '../Detalhes';

export default function Filmes({data}) {
 
   const[visibleModal,setVisibleModal] = useState(false);
 
   return (
   
      <View>
         <View style={styles.card}>
            <Text style={styles.titulo}>{data.nome}</Text>
               <Image
                  style={styles.imagemCapa}
                  source={{uri: data.foto}}
               />
         </View>
         <View style={styles.areabtn}>
            <TouchableOpacity style = {styles.btn} onPress={() => setVisibleModal(true)}>
               <Text style={styles.btntext}>SAIBA MAIS</Text>
            </TouchableOpacity>
         </View>
         <Modal
            transparent = {true}
            animationType= 'slide'
            visible = {visibleModal}
         >
            <Detalhes  filme={data} voltar={()=> setVisibleModal(false)}/>  
         </Modal>
      </View>
  );
}

const styles = StyleSheet.create({
   card:{
      backgroundColor: '#fff',
      margin: 15,
      elevation: 3
   },
   titulo:{
      fontSize: 18,
      fontWeight: 'bold',
      padding: 15
   },
   imagemCapa:{
      height: 250,
      zindex: 2,
   },
   areabtn:{
      marginTop: -65,
      zindex: 9,
      alignItems: 'flex-end',
      marginRight: 20
   },
   btn:{
      width: 100,
      backgroundColor: '#09A6FF',
      opacity: 1,
      padding: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
      marginRight: 10,
      borderRadius: 9
   },
   btntext:{
      color: '#fff'
   }    
})