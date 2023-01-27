import React, {useState} from 'react';
import { StyleSheet,
         StatusBar,
         Text,
         TextInput,
         View,
         SafeAreaView,
         TouchableOpacity,
         Keyboard}
      from 'react-native';
import firebase from './src/firebaseConnection';

console.disableYellowBox=true;

export default function App() {

   const[email,setEmail] = useState('');
   const[senha,setSenha] = useState('');
   const[nome,setNome] = useState('');


   async function Cadastrar(){
      if (!nome === '' && !email === '' && !senha === ''){
         await firebase.auth().createUserWithEmailAndPassword(email,senha)
         .then((value)=>{
            firebase.database().ref('usuarios').child(value.user.uid).set({
               nome: nome,
            })
            alert('Usuário cadastrado!');
            return;
         })
         .catch((error)=>{
            alert('Ops... algo deu errado!');
            return;
         })
      }
      else{
         alert('Digite nome, e-mail e senha para cadastrar!');
      }
   
      setNome('');
      setEmail('');
      setSenha(''); 
      Keyboard.dismiss();
   }

   return (
      <SafeAreaView style={styles.container}>
         <StatusBar style="auto" />

         <Text> Nome </Text>
         <TextInput
            style={styles.input}
            underlineColorAndroid='transparent'
            onChangeText={(texto)=> setNome(texto)}
            value={nome}
         />

         <Text> E-mail </Text>
         <TextInput
            style={styles.input}
            underlineColorAndroid='transparent'
            onChangeText={(texto)=> setEmail(texto)}
            value={email}
            keyboardType={'email-address'}
         />
         
         <Text> Password </Text>
         <TextInput
            style={styles.input}
            underlineColorAndroid='transparent'
            onChangeText={(texto)=> setSenha(texto)}
            value={senha}
         />

         <View style={{alignItems: 'center', marginBottom: -60}}>
            <TouchableOpacity style={styles.btn} onPress={ Cadastrar }>
               <Text style = {styles.btnTexto}>CADASTRAR</Text>
            </TouchableOpacity>
         </View>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff'
   },
   input:{
      borderWidth: 1, 
      borderColor: '#000000',
      height: 40,
      marginTop: 10,
      padding: 10,
      marginRight: 10,
      marginLeft: 5,
      fontSize: 17   
   },
   btn:{
      width: '80%',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000000',
      borderRadius: 25,
      marginTop: 20
   },
   btnTexto:{
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold'
   },
});