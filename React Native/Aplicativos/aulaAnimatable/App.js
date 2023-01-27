import React, {useRef} from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

const ButtonAnimated = Animatable.createAnimatableComponent(TouchableOpacity)

export default function App() {

   const buttonRef = useRef(null);

   function aperta(){
      buttonRef.current.bounce();
   }

   return (
      <SafeAreaView style={styles.container}>
         <StatusBar/>
         <Animatable.Text
            style={styles.title}
            animation='flipInX'
            iterationCount={'infinite'}
            duration={3000}
         >
            TEXTO ANIMADO
         </Animatable.Text>

         <ButtonAnimated 
            style={styles.btn}
            animation='fadeIn'
            ref={buttonRef}
            onPress={aperta}
         >
            <Text style={styles.btnText}>Animar</Text>
         </ButtonAnimated>

      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#998a8aff',
      alignItems: 'center',
      justifyContent: 'center',
   },
   title:{
      fontSize: 30,
      fontWeight: 'bold'
   },
   btn:{
      width: 200,
      height: 50,
      margin: 15,
      borderWidth: 2,
      borderRadius: 10,
      backgroundColor: '#000000ff',
      alignItems: 'center'
   },
   btnText:{
      fontSize: 30,
      fontWeight: 'bold',
      color: '#ffffffff'
   }
});
