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
import Feather from '@expo/vector-icons/Feather'

export default function Login() {

   const[email, setEmail] = useState('');
   const[senha, setSenha] = useState('');
   const[user, setUser] = useState('');

   async function Logar(){

      await firebase.auth().signInWithEmailAndPassword(email,senha)
      .then((value)=>{
         alert('Login efetuado');
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
         <View style ={styles.areaTexto}>
            <Text style={styles.texto}> E-mail </Text>
            <Feather
               name = {'mail'}
               color = '#0d2447'
               size = {20}
            />
         </View>          
         <TextInput
            style={styles.input}
            underlineColorAndroid='transparent'
            onChangeText={(texto)=> setEmail(texto)}
            value={email}
            keyboardType={'email-address'}
         />
         <View style ={styles.areaTexto}>
            <Text style={styles.texto}> Senha </Text>
            <Feather
               name = {'lock'}
               color = '#0d2447'
               size = {20}
            />
         </View>         
         <TextInput
            style={styles.input}
            underlineColorAndroid='transparent'
            onChangeText={(texto)=> setSenha(texto)}
            value={senha}
            secureTextEntry={true}
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
               <Text></Text>
            )         
         }
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#dbdbdb'
   },
   areaTexto:{
      flexDirection: 'row',
      alignItems: 'center'
   },
   texto:{
      color: '#0d2447',
      fontSize: 20,
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