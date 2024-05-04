import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createTables, insertTorcedor, initDatabase, getDbConnection, getNextTorcedorId } from './db';
const Stack = createStackNavigator();
const Cadastro = ({ navigation }) => {
const [usermat, setUsermat] = useState('');
const [username, setUsername] = useState('');
const handleGravar = async () => {
console.log('Entrou na função handleGravar');
// Verifique os valores de usermat e username
console.log('usermat:', usermat);
console.log('username:', username);
try {
await initDatabase();
const db = await getDbConnection();
const torcid = await getNextTorcedorId(db);
// Fornecer os valores usermat e username para insertTorcedor
await insertTorcedor(db, torcid, usermat, username);
setUsermat('');
setUsername('');
alert('Registro gravado com sucesso!');
} catch (error) {
console.error('Erro ao gravar registro:', error);
alert('Erro ao gravar registro. Verifique o console para mais informações.');
}
};
return (
<View style={[styles.container, { backgroundColor: 'lightblue' }]}>

    <Text style={[styles.label1, { marginBottom: 20, textAlign: 'center' }]}>
        Crie sua conta
    </Text>
    <View style={styles.inputContainer1}>
        <View style={styles.inputGroup}>
            <Text style={styles.label2}>Edit : </Text>
            <TextInput
                style={[styles.input, { width: 100 }]}
                value={usermat}
                onChangeText={setUsermat}
            />
        </View>

        <View style={styles.inputGroup}>
            <Text style={styles.label2}> Edit : </Text>
            <TextInput
            style={[styles.input, { width: 400 }]}
            value={username}
            onChangeText={setUsername}
            />
        </View>
    </View>
         <View style={styles.ButtonContainer}>
            <Button title="Gravar" onPress={handleGravar} />
         </View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
padding: 20,
},
label1: {
color: 'blue',
fontSize: 20,
fontFamily: 'Arial',
fontWeight: 'bold',
marginBottom: 5,
},
label2: {
color: 'blue',
fontSize: 18,
fontFamily: 'Arial',
fontWeight: 'bold',
marginBottom: 5,
},
inputContainer1: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 10,
},
inputGroup: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 10,
},
input: {
flex: 1,
padding: 10,
fontSize: 18,
fontWeight: 'bold',
borderWidth: 1,
borderColor: '#ccc',
backgroundColor: 'white',
textAlign: 'left',
marginBottom: 10,
},
imagem: {
alignSelf: 'stretch',
height: 70,
marginTop: 5,
},
ButtonContainer: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
marginTop: 600,
},
});
export default Cadastro;