import React from 'react';
import { View,Text,StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Feather from '@expo/vector-icons/Feather'

export default function Tasklist({data, deleteItem, selectedItem}) {
 return (
   <View style = {styles.container}>
      <TouchableOpacity
         style={{margin: 10}}
         onPress={()=> deleteItem(data.key)}
      >
         <Feather
            name = {'trash-2'}
            color = '#ffffffff'
            size = {20}
         />
      </TouchableOpacity>
      <View style = {{padding: 10}}>
         <TouchableWithoutFeedback onPress={()=> selectedItem(data.key)}>
            <Text
               style={
                  {
                     color: '#ffffffff',
                     fontSize: 18,
                     paddingRight: 10
                  }
               }
            >
               {data.nome}
            </Text>
         </TouchableWithoutFeedback>
      </View>
   </View>
  );
}

const styles = StyleSheet.create({
   container:{
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#121212',
      alignItems: 'center',
      marginBottom: 10,
      padding: 10,
      borderRadius: 4
   },
})