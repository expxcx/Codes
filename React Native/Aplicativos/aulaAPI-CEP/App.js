import React, {useRef, useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Keyboard, StatusBar } from 'react-native';

import api from './src/Services/api';

export default function App() {
   
   const [cep, setCep] = useState('');   
   const [dados, setDados] = useState(null);
   const inputRef = useRef(null);

   function limpar(){
      setCep('');
      inputRef.current.focus();
      setDados(null);
   }

   async function buscar(){
      if(cep == ''){
         alert('Digite um CEP');
         setCep('');
         return
      }
      try{
         const response = await api.get(`/${cep}/json`)
         setDados(response.data);
         Keyboard.dismiss();
      }   
      catch(error){
         setDados(null);
         alert('Cep não encontrado');
      }
   }  

   return (
      <SafeAreaView style={styles.container}>      
         <StatusBar/>
         <View style={{alignItems: 'center', marginTop: 20}}>
            <Text style={styles.titulo}>Digite o CEP desejado</Text>

            <TextInput
               style={styles.input}
               placeholder='Ex: 79000000'
               value={cep}
               onChangeText={(valor)=> setCep(valor)}
               keyboardType='numeric'
               ref={inputRef}
            />
         </View>
         
         <View style={styles.areaBtn}>
            <TouchableOpacity
               style={[styles.btn, {backgroundColor: 'blue'}]}
               onPress={buscar}
            >
               <Text style={styles.btnTxt}>Buscar</Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={[styles.btn, {backgroundColor: 'red'}]}
               onPress={limpar}
            >
               <Text style={styles.btnTxt}>Limpar</Text>
            </TouchableOpacity>
         </View>

         {dados &&
            <View style={styles.resultado}>
               <Text style={styles.itemTexto}>CEP: {dados.cep}</Text>
               <Text style={styles.itemTexto}>Logradouro: {dados.logradouro} </Text>
               <Text style={styles.itemTexto}>Bairro: {dados.bairro}</Text>
               <Text style={styles.itemTexto}>Localidade: {dados.localidade}</Text>
               <Text style={styles.itemTexto}>Estado: {dados.uf}</Text>
            </View>
         }
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
   },
   titulo: {
      fontSize: 30,
      fontWeight: 'bold',
   },
   input: {
      borderWidth: 0.5,
      borderColor: 'silver',
      borderRadius: 5,
      height: 40,
      width: '80%',
      marginTop: 20,
      padding: 10,
      paddingLeft: 8,
   },
   areaBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 40,
      justifyContent: 'space-around'
   },
   btn: {
      height: 60,
      borderEndWidth: 0.5,
      padding: 15,
      borderRadius: 5
   },
   btnTxt: {
      fontSize: 22,
      color: 'white'
   },
   resultado: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
   },
   itemTexto: {
      fontSize: 22,
      textAlign: 'center'
   }
});