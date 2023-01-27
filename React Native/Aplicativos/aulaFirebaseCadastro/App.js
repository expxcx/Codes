import React, {useState, useEffect} from 'react';
import { StyleSheet,
         StatusBar,
         Text,
         TextInput,
         View,
         SafeAreaView,
         TouchableOpacity,
         FlatList,
         ActivityIndicator,
         Keyboard
       } from 'react-native';
import firebase from './src/firebaseConnection';
import Listagem from './src/Listagem'

console.disableYellowBox=true;

export default function App() {

   const[nome,setNome] = useState('');
   const[cargo, setCargo] = useState('');
   const[usuarios,setUsuarios] = useState([]);
   const[loading,setLoading] = useState(true);

   useEffect(()=> {
      async function dados(){
         await firebase.database().ref('usuarios').on('value', (snapshot)=>{
            setUsuarios([]);
            snapshot.forEach((ChildItem) => {
               let data ={

               key: ChildItem.key,
               nome: ChildItem.val().nome,
               cargo: ChildItem.val().cargo
            };
            setUsuarios(oldArray => [...oldArray, data].reverse());
            setLoading(false);
            })
         })
      }
      dados();
   },[]);

   async function Cadastrar(){
      if(nome !== '' && cargo !== ''){

         let usuarios = await firebase.database().ref('usuarios');
         let chaves = usuarios.push().key; // cria uma chave aleatória que nunca se repete
         // adicionar uma child de key aleatoria no banco de dados
         usuarios.child(chaves).set({
            nome: nome,
            cargo: cargo
         });

         alert('Funcionário cadastrado!')
         setNome('');
         setCargo('');
         Keyboard.dismiss();
      }
      else{
         alert('Digite um nome e um cargo!');
      }
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
         
         <Text style={styles.texto}> Cargo </Text>
         <TextInput
            style={styles.input}
            underlineColorAndroid='transparent'
            onChangeText={(texto)=> setCargo(texto)}
            value={cargo}
         />

         <View style={{alignItems: 'center', marginBottom: -60}}>
            <TouchableOpacity style={styles.btn} onPress={ Cadastrar }>
               <Text style = {styles.btnTexto}>CADASTRAR</Text>
            </TouchableOpacity>
         </View>

         {loading? 
            (
               <ActivityIndicator color={'#ffffff'} size={45}            
               style={{marginTop: 70}}/>
            )
            :
            (
               <FlatList 
                  style={styles.rodaLista}
                  keyExtractor={item=> item.key}
                  data={usuarios}
                  renderItem={ ({item}) => (<Listagem data={item} />)}
               />
            )
         }
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#010020'
   },
   texto:{
      fontSize: 20,
      color: '#73ff00'
   },
   input:{
      borderWidth: 1, 
      borderColor: '#73ff00',      
      color: '#73ff00',
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
      backgroundColor: '#73ff00',
      borderRadius: 25,
      marginTop: 20
   },
   btnTexto:{
      color: '#010020',
      fontSize: 20,
      fontWeight: 'bold'
   },
   rodaLista:{
      marginTop: 100,
      marginBottom: 10
   }
});