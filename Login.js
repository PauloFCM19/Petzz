
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const Login = ({ navigation }) => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const handleLogin = () => {
    if (username === '' && password === '') {
        navigation.navigate('CadastroPet'); // Navigate to Cadastro screen
        //LIMPANDO OS CAMPOS DE ENTRADAS DE DADOS
        setUsername('');
        setPassword('');
    } else {
        alert('Usuário e/ou Senha inválidos');
    }
};

const handleRegister = () => {
    navigation.navigate('Cadastro');
    setUsername('');
    setPassword('');    
}

return (
//backgroundColor - COR DO FUNDO DA TELA
<View style={[styles.mainContainer]}>

  

    {/* Input Container */}
    <View style={styles.formContainer}>
        <Text style={[styles.labelTitulo, { marginBottom: 20, textAlign: 'center' }]}>
            <h1>
                Bem-vindo à AbracePetz
            </h1>
        </Text>
        <View style={styles.loginContainer}>
            <Text style={styles.labelUsuario}>Usuário </Text>
            <TextInput
            style={[styles.inputUser]} // AJUSTE DO TAMANHO DA LARGURA DO TEXTINPUT
            value={username}
            onChangeText={setUsername} 
            placeholder='Digite seu Login'

            />
              <View >
            <Text style={styles.labelSenha}> Senha</Text>
                <TextInput
                 style={[styles.inputPassword]} // AJUSTE DO TAMANHO DA LARGURA DO TEXTINPUT
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                placeholder='Digite sua Senha'
                
                    />
           </View>


        </View>

        <View style={styles.inputGroup}>
         
           
            <View style = {styles.ButtonContainer}>
                <View  style = {styles.ButtonContainer2} >
                <Pressable style={styles.botao} onPress={handleLogin}>
                                <Text style = {styles.botaoText}>LOGIN</Text>
                            </Pressable>
                 </View>
                <View style = {styles.ButtonContainer2} >
                            <Pressable style={styles.botao} onPress={handleRegister}>
                                <Text style = {styles.botaoText}>CADASTRE-SE</Text>
                            </Pressable>
                </View>

            </View>
                    
                   

        </View>

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
botao:{
    backgroundColor: '#fff',
    color: '#fff'
},
formContainer:{
    
    padding: '50px',
    backgroundColor: 'rgb(40, 36, 65)',
    borderRadius: '15px', 
},
labelTitulo:{
    color: 'rgb(3,245,133))',
    
},
loginContainer:{
    
    padding: '10px',
    
},
ButtonContainer:{
    color:'rgb(0, 245, 117)',
    padding: '10px'
}
,
ButtonContainer2:{
    paddingBottom: '20px',
    
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
inputPassword: {
    width: '100%', 
    height: '40px',
    textAlign: 'left', 
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: 'rgb(85, 70, 108)',
    margin: '5px'
},
labelUsuario: {
    fontSize: '16px',
    fontWeight: '700',
    paddingLeft: '10px',
    color: 'rgb(3,245,133))'
},
labelSenha: {
    fontSize: '16px',
    fontWeight: '700',
    paddingLeft: '10px',
    color: 'rgb(3,245,133))',
    
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
}



// ButtonContainer: {
    
//     display: 'flex',
//     flexDirection: 'row'
// },
// label1: {
//     color: 'blue',
//     fontSize: 20,
//     fontFamily: 'Arial',
//     fontWeight: 'bold',
//     marginBottom: 5,
    
    
// },
// labelusuario: {
//     marginTop: 100,
//     color: 'blue',
//     fontSize: 18,
//     fontFamily: 'Arial',
//     fontWeight: 'bold',
//     marginBottom: 5,
    
// },
// label2: {
//     color: 'blue',
//     fontSize: 18,
//     fontFamily: 'Arial',
//     fontWeight: 'bold',
//     marginBottom: 5,
// },
// inputContainer1: {
//     //flexDirection: 'row', // ALINHA INPUTS EM FORMA HORIZONTAL NO CONTAINER
//     alignItems: 'center', // ALINHA INPUTS EM FORMA VERTICAL NO CONTAINER
//     marginBottom: 10,
   
// },

// inputContainer1:{
//     border: '5px solid', 
//     height: '100px',
// },
// inputGroup: {
//     // flexDirection: 'row', // ALINHA INPUTS EM FORMA HORIZONTAL NO CONTAINER
//     alignItems: 'center', // ALINHA INPUTS EM FORMA VERTICAL NO CONTAINER
//     marginBottom: 10,
// },
// input: {
//     flex: 1, // REMANEJA DE ESPAÇO PARA CIMA
//     padding: 10,
//     fontSize: 18,
//     fontWeight: 'bold',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor: 'white',
//     textAlign: 'left',
//     marginBottom: 10,
// },
// ButtonContainer : {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems : 'center',
//     marginTop: 400,
// },
// register : {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems : 'center',
//     marginTop: 200,
// }
});
export default Login;