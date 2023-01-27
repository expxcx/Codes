import React, {useState} from 'react';
import { View, StatusBar, SafeAreaView, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

function app() {

   const[imagem,setImg] = useState(require("./src/biscoito.png"));
   const[frases,setFrases] = useState("");

   let frasesBisc = [
      'Siga os bons e aprenda com eles.', 
      'O bom-senso vale mais do que muito conhecimento.', 
      'O riso é a menor distância entre duas pessoas.', 
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'
   ];
  
   function quebrar(){
      if(frases === ""){
         setImg(require("./src/biscoitoAberto.png"));
         let numAleatorio = Math.floor(Math.random() * (frasesBisc.length));
      setFrases(frasesBisc[numAleatorio]);
   }    
   }
   function resetar(){
      setImg(require("./src/biscoito.png"));
      setFrases('');
   }
   return (
      <SafeAreaView style = {styles.container}>
         <StatusBar/>
    
         <Image
         source = {imagem}
         style = {styles.img}
         />

         <Text style = {styles.frase}>{frases}</Text>
            
         <TouchableOpacity style = {[styles.botao, {marginTop: 40}]} onPress={quebrar}>
         <View style = {styles.botaoArea}>
               <Text style = {styles.botaoTexto}>QUEBRAR BISCOITO</Text>
         </View>
         </TouchableOpacity>

         <TouchableOpacity style = {styles.botao} onPress={resetar}>
         <View style = {styles.botaoArea}>
            <Text style = {styles.botaoTexto}>RESETAR BISCOITO</Text>
         </View>
         </TouchableOpacity>
      
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
   container:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center'
   },
   img:{
      height:250,
      width:250,
   },
   frase:{
      textAlign: 'center',
      fontSize: 15,
      fontStyle: 'italic',
      marginTop: 10,
      color: "#e48100"
   },
   botao:{
      width: 230,
      height: 50,   
      margin: 15,
      borderWidth: 2,
      borderRadius: 25,
      borderColor: "#e48100",
   },
   botaoArea:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
   },
   botaoTexto:{
      fontSize: 18,
      fontWeight: 'bold',
      color: "#e48100"
   }     
})

export default app