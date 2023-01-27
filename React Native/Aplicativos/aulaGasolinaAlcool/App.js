import React, {useState} from 'react';
import { Image, Modal, SafeAreaView, StatusBar, StyleSheet,TouchableOpacity, TextInput, Text, View } from 'react-native';

import Resultado from './src/Resultado';

export default function App() {

   const [alcool, setAlcool] = useState('');
   const [gasolina, setGasolina] = useState('');
   const [resultado, setResultado] = useState('');   
   const [visibleModal, setVisibleModal] = useState(false);

   function calcularValor(){
      if(gasolina == '' || alcool == ''){
         alert('Digite os valores da gasolina e do álcool!');
         return;
      }
      else{
         setResultado(parseFloat(alcool)/parseFloat(gasolina));         
         setVisibleModal(true);
      }   
   }

   function fecharModal(){
      setVisibleModal(false);
      setAlcool('');
      setGasolina('');
   }

   return (
      <SafeAreaView style={styles.container}>
         <StatusBar style='auto'/>
         <Image
            style={styles.imagem}
            source={require('./src/img/logo.png')}
         />
         <Text style={styles.titulo}>Qual a melhor opção?</Text>         
         <View style={styles.viewInput}>
            <Text style={styles.label}>Álcool (preço por litro):</Text>
            <TextInput
               style={styles.input}
               value={alcool}
               onChangeText={(valor)=> setAlcool(parseFloat(valor))}
               placeholder={'Ex: 4.60'}
               keyboardType={'numeric'}
            />
            <Text style={[styles.label, {marginLeft: -85}, {marginTop: 10}]}>Gasolina (preço por litro):</Text>
            <TextInput
               style={styles.input}
               value={gasolina}
               onChangeText={(valor)=> setGasolina(parseFloat(valor))}
               placeholder={'Ex: 6.40'}
               keyboardType={'numeric'}
            />
            <TouchableOpacity style={styles.btn} onPress={calcularValor}>
               <Text style={styles.btnTexto}>CALCULAR</Text>
            </TouchableOpacity>
         </View>
         <Modal 
            transparent = {true}
            animationType = 'slide'
            visible = {visibleModal}
         >
            <Resultado
               gas = {gasolina}
               alc = {alcool}               
               res = {resultado}
               voltar = {fecharModal}
            />
         </Modal>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#121212',
      alignItems: 'center',
      justifyContent: 'center'
   },
   imagem: {
      marginTop: 30,
      width: 65,
      height: 65
   },
   titulo: {
      fontSize: 30,
      color: '#ffffffff',
      fontWeight: 'bold',
      marginTop: 10
   },
   viewInput: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      paddingTop: 40
   },
   label: {
      fontSize: 20,
      color: '#ffffffff',
      fontWeight: 'bold',
      marginLeft: -100,
      marginBottom: 5
   },
   input: {
      width: '90%',
      height: 45,
      backgroundColor: '#ffffffff',
      borderColor: '#910000ff',
      borderWidth: 2,
      borderRadius: 9,
      tintColor: '#ffffffff',
      padding: 15
   },
   btn: {
      height: 60,
      width: '90%',
      marginTop: 20,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 9,
      backgroundColor: '#910000ff',
   },
   btnTexto: {
      color: '#ffffffff',
      fontWeight: 'bold',
      fontSize: 20
  }
});
