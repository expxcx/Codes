import React, {useState, useEffect} from 'react';
import { StatusBar, StyleSheet, View, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';

import api from './src/Services/api';
import Filmes from './src/Filmes';

export default function App() {

   const[filmes,setFilmes] = useState([]);
   const[loading,setLoading] = useState(true)

   useEffect(()=> {
      async function loadfilmes(){
         const response = await api.get('r-api/?api=filmes');
         setFilmes(response.data);
         setLoading(false);
      }        
      loadfilmes();
   },[]);

   if(loading){
      return (
         <View style={{
            justifyContent: 'center',
            alignItems:'center',
            flex: 1
         }}>
            <ActivityIndicator
               color='#121212'
               size={45}
            />
         </View>
      )
   }
   else{
      return (
         <SafeAreaView style={styles.container}>
            <StatusBar/>          
            <FlatList
               data={filmes}
               keyExtractor={(item)=> String(item.id)}
               renderItem={({item})=> <Filmes data={item}/>}
            />
         </SafeAreaView>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff'
   }
});