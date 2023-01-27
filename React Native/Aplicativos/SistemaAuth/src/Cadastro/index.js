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
import firebase from '../Firebase/firebaseConnection';

export default function Cadastro() {
   const[email,setEmail] = useState('');
   const[senha,setSenha] = useState('');
   const[nome,setNome] = useState('');


   async function Cadastrar(){
      if (!nome === '' || !email === '' || !senha === ''){
         await firebase.auth().createUserWithEmailAndPassword(email,senha)
         .then((value)=>{
            firebase.database().ref('usuarios').child(value.user.uid).set({
               nome: nome,   
            })
            alert('Usuário cadastrado!')
            return;
         })
         .catch((error)=>{
            alert('Ops... algo deu errado!');
            return;
         })
      }
      else{
         alert('Digite nome, e-mail e senha para cadastrar!')
      }
   
      setNome('');
      setEmail('');
      setSenha(''); 
      Keyboard.dismiss();
   }

   return (
      <SafeAreaView style={styles.container}>
         <StatusBar style="auto" />

         <Text style={styles.texto}> Nome </Text>
         <TextInput
            style={styles.input}
            underlineColorAndroid='transparent'
            onChangeText={(texto)=> setNome(texto)}
            value={nome}
         />

         <Text style={styles.texto}> E-mail </Text>
         <TextInput
            style={styles.input}
            underlineColorAndroid='transparent'
            onChangeText={(texto)=> setEmail(texto)}
            value={email}
            keyboardType={'email-address'}
         />
         
         <Text style={styles.texto}> Senha </Text>
         <TextInput
            style={styles.input}
            underlineColorAndroid='transparent'
            onChangeText={(texto)=> setSenha(texto)}
            value={senha}            
            secureTextEntry={true}
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
      backgroundColor: '#dbdbdb'
   },   
   texto:{
      color: '#0d2447',
      fontSize: 20
   },
   input:{
      borderWidth: 1, 
      borderColor: '#0d2447',
      height: 40,
      marginTop: 10,
      padding: 10,
      marginRight: 10,
      marginLeft: 5,
      fontSize: 17   
   },
   btn:{
      width: '60%',
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0d2447',
      borderRadius: 25,
      marginTop: 20
   },
   btnTexto:{
      color: '#dbdbdb',
      fontSize: 20,
      fontWeight: 'bold'
   },
});