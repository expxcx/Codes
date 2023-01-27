import React, { useState } from 'react';
import { StatusBar, 
         SafeAreaView, 
         StyleSheet, 
         Text, 
         View,
         TouchableOpacity,
         TextInput,
         Image
        } from 'react-native';

import firebase from '../Services/firebaseConnection';

export default function Login( {changeStatus} ) {

	const[email,setEmail] = useState('');
	const[password,setPassword] = useState('');
	const[type,setType] = useState('login');

	function Login(){
		if(type === 'login'){
			const user = firebase.auth().signInWithEmailAndPassword(email,password)
			.then((user)=>{
				changeStatus(user.user.uid);
				alert('Logou!');
			})
			.catch((error)=>{
				console.log(error);
				alert('Algo deu errado!');
				return;
			})
		}else{
			const user = firebase.auth().createUserWithEmailAndPassword(email,password)
			.then((user)=> {
				changeStatus(user.user.uid);
				alert('Usuario cadastrado!');
			})
			.catch((error)=>{
				console.log(error);
				alert('Algo deu errado!');
				return;
			})
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="auto" />
			<View style ={styles.viewImage}>
				<Image
				style={styles.imagem}
				source={require('../Images/TODOLIST.png')}
				/>
			</View>

			<TextInput
				placeholder='Seu E-mail'
				style={styles.input}
				value={email}
				onChangeText={(text) => setEmail(text)}
				keyboardType= 'email-address'
			/>

			<TextInput
				placeholder='*********'
				style={styles.input}
				value={password}
				onChangeText={(text) => setPassword(text)}
				keyboardType='visible-password'
			/>
			
			<TouchableOpacity style={[styles.btn, {backgroundColor: type === 'login'? '#3ea6f2':'#141414'}]} onPress = { Login }>
				<Text style = {styles.btnText}>
					{type === 'login'? 'Acessar' : 'Cadastrar'}     
				</Text>
			</TouchableOpacity>

			<TouchableOpacity onPress={() => setType(type => type === 'login'? 'cadastro' : 'login')}>
				<Text style={{textAlign: 'center', fontSize: 15, marginTop: 10}}>
					{type === 'login'? 'Criar uma conta' : 'Já possuo uma conta'}
				</Text>
			</TouchableOpacity>
			
		</SafeAreaView>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 40,
		backgroundColor: '#f2f6fc',
		paddingHorizontal: 10
	
	},
	viewImage:{
		height: 100,
		alignItems: 'center',
		marginBottom: 30
	},
	imagem:{
		height: '100%',
		width: '50%',
		resizeMode: 'contain'
	},
	input:{
		marginBottom: 10,
		backgroundColor: '#fff',
		borderRadius: 4,
		height: 45,
		padding: 10,
		borderWidth: 1,
		borderColor: '#141414'
	},
	btn: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 45,
		width: '100%'
	},
	btnText:{
		color: '#fff',
		fontSize: 15,
		fontWeight: 'bold'
	}
});
