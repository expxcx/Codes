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
   const[user,setUser] = useState('');


   async function Logar(){

      await firebase.auth().signInWithEmailAndPassword(email,senha)
      .then((value)=>{
         alert('Bem-vindo: ' + value.user.email);
         setUser(value.user.email);
      })
      .catch((error)=>{
         alert('Ops... algo deu errado!');
         return;
      })
   
      setEmail('');
      setSenha(''); 
      Keyboard.dismiss();
   }

   async function Deslogar(){
      await firebase.auth().signOut();
      alert('Deslogado com sucesso');
      setUser('');
   }
  
   return (
      <SafeAreaView style={styles.container}>
         <StatusBar style="auto" />

         <Text style={styles.texto}> E-mail </Text>
         <TextInput
            style={styles.input}
            underlineColorAndroid='transparent'
            onChangeText={(texto)=> setEmail(texto)}
            value={email}
            keyboardType={'email-address'}
         />
         
         <Text style={styles.texto}> Password </Text>
         <TextInput
            style={styles.input}
            underlineColorAndroid='transparent'
            onChangeText={(texto)=> setSenha(texto)}
            value={senha}
         />

         <View style={{alignItems: 'center', marginBottom: -60}}>
            <TouchableOpacity style={styles.btn} onPress={ Logar }>
               <Text style = {styles.btnTexto}>LOGIN</Text>
            </TouchableOpacity>
         </View>

         <Text style={{marginTop: 70, fontSize: 22, textAlign: 'center'}}>
            {user}
         </Text>

         {user.length> 0?
            (
               <View style={{alignItems: 'center', marginBottom: -60}}>
                  <TouchableOpacity style={styles.btn} onPress={ Deslogar }>
                     <Text style = {styles.btnTexto}>LOGOUT</Text>
                  </TouchableOpacity>
               </View>
            )
            :
            (
               <Text style={{marginTop: 70, fontSize: 22, textAlign: 'center'}}>
                  Nenhum usuário logado!
               </Text>
            )         
         }
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff'
   },
  texto:{
      
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