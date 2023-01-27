import React, { useState, useEffect } from 'react';
import { StatusBar, 
         SafeAreaView, 
         StyleSheet, 
         Text, 
         View,
         TouchableOpacity,
         FlatList,
         TextInput,
			Keyboard
        } from 'react-native';

import Login from './src/Components';
import Tasklist from './src/Components/Tasklist'
import firebase from './src/Services/firebaseConnection'

export default function App() {

	const[user,setUser] = useState(null); // controlar quando o usuário está logado
	const[newTask,setNewTask] = useState('');
	const[tasks,setTasks] = useState ([]);
	const[key,setKey] = useState ([]);
	
	useEffect(()=>{
		function getUser(){
			if(!user){
				return;
			}

			firebase.database().ref('tarefas').child(user).once('value', (snapshot)=> {
				setTasks([]);
				
				snapshot?.forEach((childItem)=>{
					let data = {
						key: childItem.key,
						nome: childItem.val.nome
					}

					setTasks(oldTasks => [...oldTasks, data]);
				})
			})
		}

		getUser();
	},[user])

	// verifica se o login está cadastrado
	if(!user){
		return <Login changeStatus = {(user)=> setUser(user)}/>
	}

	function handleAdd(){
		if(newTask === ''){
			return;
		}

		if(key === ''){
			firebase.database().ref('tarefas').child(user).child(key).update({
				nome: newTask
			})
			.then(()=>{
				const taskIndex = tasks.findIndex((item) => item.key === key)
				const taskClone = tasks;
				taskClone[taskIndex].nome = newTask;
			})
			setTasks([...taskClone]);
			Keyboard.dismiss();
			setNewTask('');
			setKey('');
			return;
		}

		let tarefas = firebase.database().ref('tarefas').child(user);
		let chave = tarefas.push().key;

		tarefas.child(chave).set({
			nome: newTask
		})
		.then(()=>{
			const data={
				key: chave,
				nome: newTask
			};

			setTasks(oldTasks => [...oldTasks, data]);
		})

		setNewTask('');
		Keyboard.dismiss();
	}

	function handleDelete(key){
		firebase.database().ref('tarefas').child(user).child(key).remove()
		.then(()=>{
			const findTasks = tasks.filter(item => item.key !== key)
			setTasks(findTasks);
		})
	}

	function handleEdit(data){
		setNewTask(data.nome);
		inputRef.current.focus();
		setKey(data.key);
	}

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="auto" />         
			<View style={styles.viewBtn}>
				<TextInput
					style = {styles.input}
					placeholder ='digite uma tarefa'
					value = {newTask}
					onChangeText = {(text)=> setNewTask(text)}
				>					
				</TextInput>
				<TouchableOpacity>
					<Text style={styles.btnText} onPress= {handleAdd}>
						+
					</Text>
				</TouchableOpacity>
					
			</View>

			<FlatList
				data={tasks}
				keyExtractor={(item=> item.key)}
				renderItem={({item})=> (
					<Tasklist 
						data = {item}
						deleteItem={handleDelete}
						selectedItem={handleEdit}
					
					/>
				)}
			/>
		</SafeAreaView>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
	},
	viewBtn: {
		flexDirection: 'row',
		marginTop: 10
	},
	input:{
		flex: 1,
		marginBottom: 10,
		padding: 10,
		backgroundColor: '#fffffffffff',
		borderRadius: 4,
		borderWidth: 1,
		borderColor: '#000000ff00',
		height: 45
	},
	btn:{
		backgroundColor: '#000000ff00',
		height: 45,
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 5,
		paddingHorizontal: 14,
		borderRadius: 4
	},
	btnText: {
		color: '#fffffffffff',
		fontSize: 22
	}
});