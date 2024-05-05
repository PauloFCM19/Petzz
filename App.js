import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Import your database functions
import { initDatabase } from './db';
import Login from './Login';
import Cadastro from './Cadastro';
import CadastroPet from './CadatroPet';



const Stack = createStackNavigator();
const App = () => {
useEffect(() => {
async function init() {
const db = await initDatabase(); // Chame a inicialização do banco de dados apenas uma vez
}
init();
}, []);
return (
<NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="CadastroPet" component={CadastroPet}/>
    </Stack.Navigator>
</NavigationContainer>
);
};
export default App;