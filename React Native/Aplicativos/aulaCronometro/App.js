import React, {useState} from 'react';
import { View, StatusBar, SafeAreaView, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

let timer = null;
let segundos = 0;
let minutos = 0;
let horas = 0;

function app() {

   const [numero, setNumero] = useState("00:00:00");
   const [botao, setBotao] = useState("INICIAR");
   const [medido, setMedido] = useState("");

   function iniciar(){
      //Reiniciar o timer
      if(timer !==null){
         clearInterval(timer);
         timer = null;
         setBotao("INICIAR");
      }
      else{
      //Iniciar o timer
         setBotao("PARAR");
         timer = setInterval(()=> {
            segundos++;
            if(segundos==60){
               segundos=0;
               minutos++;
            }
            if(minutos==60){
               minutos=0;
               horas++;
            }
            let format = (horas<10? "0" + horas: horas) + ":" + (minutos<10? "0" + minutos: minutos) + ":" + (segundos<10? "0" + segundos: segundos);
            setNumero(format);
         }, 100);
         setBotao("PARAR");
      }
   }
   function zerar(){
      if(timer!== null){
         clearInterval(timer);
         timer = null;
      }
      setNumero('00:00:00');
      setMedido(numero);
      segundos = 0;
      minutos = 0;
      horas = 0;
      setBotao("INICIAR");
      if(horas == 0 && minutos == 0 && segundos == 0){
         let zero = "00:00:00";
         setNumero(zero)
      }
   }

   return (
      <SafeAreaView style = {styles.container}>
         <StatusBar/>

         <Image
            source = {require('./src/crono.png')}
         />

         <Text style = {styles.texto}>{numero}</Text>

         <View style = {styles.botaoArea}>
         <TouchableOpacity style = {styles.botao} onPress = {iniciar}>
            <Text style = {styles.botaoTexto}>{botao}</Text>
         </TouchableOpacity>
         <TouchableOpacity style = {styles.botao} onPress = {zerar}>
            <Text style = {styles.botaoTexto}>ZERAR</Text>
         </TouchableOpacity>
         </View>

         <View style = {styles.areaTempoMedido}>
         <Text style = {styles.tempoMedido}> {medido}</Text>
         </View>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container:{
      flex:1,
      backgroundColor: '#00aeef',
      alignItems: 'center',
      justifyContent: 'center'
   },
   texto:{
      marginTop: -165,
      fontSize: 45,
      fontWeight : 'bold',
      color: '#ffffff'
   },
   botao:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',    
      margin: 15,
      borderRadius: 9,
      backgroundColor: '#ffffff',
      height: 40
   },
   botaoArea:{
      flexDirection: 'row',
      marginTop: 150,
      height: 40,
   },
   botaoTexto:{
      fontSize:22,
      fontWeight: 'bold'
   },
   areaTempoMedido:{
      marginTop:50
   },
   tempoMedido:{
      fontSize:20,
      fontStyle: 'italic',
      fontWeight: 'bold',
      color: '#ffffff'
   },
});

export default app