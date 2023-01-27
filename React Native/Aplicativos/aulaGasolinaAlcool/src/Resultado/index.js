import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Resultado(props) {
   return (
      <View style={styles.container}>
         <Image
            style={styles.imagem}
            source={require('../img/gas.png')}      
         />
         <Text style={styles.preco}>Com os preços de:</Text>
         <Text style={styles.valor}>Álcool: R$ {parseFloat(props.alc).toFixed(2)}</Text>
         <Text style={styles.valor}>Gasolina: R$ {parseFloat(props.gas).toFixed(2)}</Text>         
         <Text style={styles.resultado}>
            {parseFloat(props.res)<=0.7? 'Compensa usar álcool':'Compensa usar gasolina'}
         </Text>
         <TouchableOpacity style={styles.btn} onPress={props.voltar}>
            <Text style={styles.textoBtn}>Calcular novamente</Text>
         </TouchableOpacity>
      </View>
   );
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#121212',
      alignItems: 'center',
   },
   imagem: {
      marginTop: 30,      
      width: 65,
      height: 65
   },
   resultado: {
      fontSize: 30,
      color: '#ffffffff',
      fontWeight: 'bold',
      marginTop: 20
   },
   preco: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#ffffffff',
      marginTop: 20
   },
   valor: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#ffffffff',
      marginTop: 20
   },
   btn: {
      height: 40,
      width: '70%',
      borderColor: '#910000ff',
      backgroundColor: '#121212',
      borderWidth: 2,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 9,
      marginTop: 30
   },
   textoBtn: {
      fontSize: 20,
      color: '#910000ff',
      fontWeight: 'bold',      
      alignItems: 'center',
      justifyContent: 'center'
   }
 });