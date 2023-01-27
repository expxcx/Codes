import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Text, TextInput, TouchableOpacity ,View } from 'react-native';

export default function convTemperatura() {

   const [celcius, setCelcius] = useState(null);
   const [saida, setSaida] = useState('');
/*Função para receber a entrada da temperatura em graus celsius. Como a entrada vem em string usei parseFloat e
converti pra float. A função só receberá o valor caso a string de entrada seja diferente de '' que é o estado inicial
e para que no processo de receber uma nova entrada o valor anterior não fique mantido, no else setCelcius recebe null*/
   function pegaCelcius(temperatura){
      if(temperatura!=='' && temperatura!=='-' && temperatura!=='.'){
         setCelcius(parseFloat(temperatura))
      }
      else{
         setCelcius(null)
         setSaida('')
      }
   }
/*A função converte será chamada quando o botão for clicado e só mostrará algo caso haja algum valor vindo do input.
Aproveitei e já fiz as conversões direto pras variáveis kelvin e fahrenheit. E por fim, deixar a saída ja formatada,
onde usei toFixed(2) pra deixar as temperaturas convertidas com 2 casas decimais*/
   function converte(){
      if(celcius!==null){
         let kelvin = parseFloat(celcius + 273.15)
         let fahrenheit = parseFloat(celcius *(9/5)+32)
         let format = (celcius + " ºC = " + fahrenheit.toFixed(2) + " ºF = " + kelvin.toFixed(2) + " ºK")
         setSaida(format)
      }
      else{
         setSaida('')
      }
   }
  
   return (
      <SafeAreaView style = {styles.container}>
         <StatusBar/>
         <View style = {styles.textoArea}>
            <Text style = {styles.texto}>Conversor de Temperatura</Text>
         </View>
         <View style = {styles.inputArea}>
            <TextInput
               style={styles.input}
               onChangeText={(temperatura) => pegaCelcius(temperatura)}
               //pra garantir que só sejam digitados números e mudei o tipo do declado para numérico.
               keyboardType = 'numeric'
               placeholder = 'Temperatura em ºC'
            />
            <TouchableOpacity style = {styles.botao} onPress = {converte}>
               <Text style = {styles.botaoTexto}>CONVERTER</Text>
            </TouchableOpacity>
         </View>      
         <View style = {styles.saidaArea}>
            <Text style = {styles.textoSaida}>{saida}</Text>
         </View>
      </SafeAreaView>
  );
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#ffffffff'
   },  
   textoArea: {
      height: 40,
      marginTop: 25,   
      alignItems: 'center',
      backgroundColor: '#19bb98'
   },
   texto: {
      fontSize: 25,
      fontWeight : 'bold',
      color: '#ffffffff'
   },
   inputArea: {
      marginTop: 150,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
   },
   input: {
      height: 30,
      width: 130,
      margin: 5,
      padding: 4,    
      borderWidth: 1
   },
   botao: {
      height: 30,
      width: 130,    
      margin: 5,    
      alignItems: 'center',
      borderRadius: 9,
      backgroundColor: '#19bb98'
   },
   botaoTexto: {
      fontSize:20,
      fontWeight: 'bold',
      color: '#ffffffff'
   },  
   saidaArea: {
      marginTop: 25,
      alignItems: 'center',
   },
   textoSaida: {
      fontSize: 20,
      color: '#19bb98'
   },
});