import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createTables, insertTorcedor, initDatabase, getDbConnection, getNextTorcedorId } from './db';

const stack = createStackNavigator();


const CadastroPet = ({navigation }) => {
    const [username, setUsername] = useState('');
    const [useremail, setUseremail] = useState('');
    const [userpassword, setUserpassword] = useState('');

    const handlerCadastrar = () => {
        alert('Pet cadastrado com sucesso!');
    }
    return (
        <View style={[styles.mainContainer]}>
            <View style={styles.formContainer}>
                <Text style={styles.labelTitulo }>
                    <h1>
                        Cadastre o Pet
                    </h1>
                </Text>
                <View style={styles.loginContainer}>
                <Text style={styles.labelNome}>Nome</Text>
                        <TextInput
                        style={[styles.inputUser]} // AJUSTE DO TAMANHO DA LARGURA DO TEXTINPUT
                        value={username}
                        onChangeText={setUsername} 
                        placeholder='Digite o Nome o do Pet'
        
                 />
        
                {/* <View style={styles.inputGroup}>
                    <Text style={styles.label2}>Edit : </Text>
                    <TextInput
                        style={[styles.input, { width: 100 }]}
                        value={usermat}
                        onChangeText={setUsermat}
                    />
                </View> */}
                <Text style={styles.labelNome}>Raça</Text>
                        <TextInput
                        style={[styles.inputUser]} // AJUSTE DO TAMANHO DA LARGURA DO TEXTINPUT
                        value={useremail}
                        onChangeText={setUseremail} 
                        placeholder='Informe a Raça do pet'
        
                />
                <Text style={styles.labelNome}>Gênero</Text>
                        <TextInput
                        style={[styles.inputUser]} // AJUSTE DO TAMANHO DA LARGURA DO TEXTINPUT
                        value={userpassword}
                        onChangeText={setUserpassword} 
                        placeholder='Informe o Gênero do pet'
        
                />
                 <View style = {styles.ButtonContainer2}>
                    <Pressable  style={styles.botao} onPress={handlerCadastrar} >
                        <Text style={ styles.botaoText}>
                            CADASTRAR
                        </Text>
                    </Pressable>
                 </View>
               
                </View >
           
                
            </View>
            
        </View>
        
        
        );
        
        
        };
        const styles = StyleSheet.create({
        mainContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
            backgroundColor: 'rgb(0, 254, 129)',
            height: '100%', 
            padding: '20px'
        },
        formContainer:{
            margin:'20px',
            padding: '50px',
            backgroundColor: 'rgb(40, 36, 65)',
            borderRadius: '15px',
             
            
        },
        labelTitulo: {
            color: 'rgb(3,245,133))',
            width: '250px',
            textAlign: 'center'
        },
        loginContainer:{
            
            padding: '10px',
            
        },
        labelNome: {
            fontSize: '16px',
            fontWeight: '700',
            paddingLeft: '10px',
            color: 'rgb(3,245,133))',
            marginBottom: '10px'
        },
        inputUser:{
            width: '100%', 
            height: '40px',
            textAlign: 'left', 
            padding: '10px',
            borderRadius: '5px',
            backgroundColor: 'rgb(85, 70, 108)',
            margin: '5px',
            
            
        
        },
        ButtonContainer2:{
            marginTop: '20px'
        },
        botao:{
            backgroundColor: '#00fe99',
            alignItems: 'center',
            borderRadius: '10px'
            
            
        },
        botaoText:{
            fontSize: '16px',
            fontWeight:'bold',
            color:'rgb(85, 70, 108)',
            padding: '10px'
        },
        label2: {
        
        },
        inputContainer1: {
        
        },
        inputGroup: {
        
        },
        input: {
        
        },
        
        ButtonContainer: {
        
        },
        });


export default CadastroPet;
