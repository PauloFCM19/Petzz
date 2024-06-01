import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image, Pressable } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createTables,  initDatabase, getDbConnection, getNextPetId } from './db';

const stack = createStackNavigator();


const DashBoard = ({navigation }) => {
   

    const handlerCadastrar = () => {
        navigation.navigate('CadastroPet');
    }
    const handlerBuscar = () => {
        navigation.navigate('BuscarPet');
    }
    const handlerDeletar = () => {
        navigation.navigate('DeletarPet');
    }
    return (
        <View style={[styles.mainContainer]}>
            <View style={styles.formContainer}>
                <Text style={styles.labelTitulo }>
                    <h1>
                        Seja bem vindo a AbracePetz
                    </h1>
                    <h2>
                        O que gostaria fazer?
                    </h2>
                </Text>
                <View style={styles.loginContainer}>
                
                 <View style = {styles.ButtonContainer2}>
                    <Pressable  style={styles.botao} onPress={handlerCadastrar} >
                        <Text style={ styles.botaoText}>
                            Cadastrar PET
                        </Text>
                    </Pressable>
                 </View>
                 <View style = {styles.ButtonContainer2}>
                    <Pressable  style={styles.botao} onPress={handlerBuscar} >
                        <Text style={ styles.botaoText}>
                            Buscar PET
                        </Text>
                    </Pressable>
                 </View>
                 <View style = {styles.ButtonContainer2}>
                    <Pressable  style={styles.botao} onPress={handlerDeletar} >
                        <Text style={ styles.botaoText}>
                            Deletar PET
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
            width: '420px',
            height:'500px',
            alignItems: 'center',
            
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
            marginTop: '20px',
            width:'150px'
        },
        botao:{
            backgroundColor: '#00fe99',
            alignItems: 'center',
            borderRadius: '10px',
            width:'150px'
            
        },
        botaoText:{
            fontSize: '16px',
            fontWeight:'bold',
            color:'rgb(85, 70, 108)',
            padding: '10px'
        }
        
       
        });


export default DashBoard;





