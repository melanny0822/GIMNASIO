import React, { useState } from "react";
import { 
    Alert, 
    View, 
    StyleSheet,
    Image,
    ScrollView, 
    Text,
    TextInput,
    Pressable,
    
} from 'react-native'
import { registerUser } from "./AuthManager";

const Register = ({onBack, onRegister}) =>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleRegister = () => {
        if(password !== confirmPassword){
            Alert.alert(Error, 'Las contraseñas no coinciden')
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/
        if (!password.match(passwordRegex)){
            Alert.alert('Error', 'La contraseña debe tener al menos 8 caracteres entre letras, numeros y caracteres especiales')
            return;
        } 

        registerUser(username, password)
        Alert.alert ('Bienvenido', 'Usuario registrado con éxito!')
        onRegister(username, password)
    }
     
    return(
        <View style={style.contain}>
            <ScrollView>
                <View style={style.imageContain}>
                    <Image source={require('../assets/Registro.png')} style={style.image}/>
                </View>

                <Text style={style.text}>REGISTER USERS</Text>
                <TextInput
                    style={style.input}
                    placeholder='Username'
                    onChangeText={setUsername}
                    value={username}
                    placeholderTextColor={'#000000'}
                />
                <TextInput
                    style={style.input}
                    placeholder='Password'
                    onChangeText={setPassword}
                    value={password}
                    placeholderTextColor={'#000000'}
                    secureTextEntry
                />
                <TextInput
                    style={style.input}
                    placeholder='Confirm Password'
                    onChangeText={setConfirmPassword}
                    value={confirmPassword}
                    placeholderTextColor={'#000000'}
                    secureTextEntry
                />

                <Pressable style={style.btn} onPress={handleRegister}>
                    <Text style={style.textbtn}>REGISTER</Text>
                </Pressable>

                <Pressable style={style.btn} onPress={onBack}>
                    <Text style={style.textbtn}>BACK</Text>
                </Pressable>

            </ScrollView>
            

        </View>
    )}

    const style = StyleSheet.create({
        contain:{
            flex:1,    
        },
    
        title:{
            fontSize: 50,
            color: '#000000',
            textAlign: 'center',  
            fontStyle: 'italic',
            marginTop: 45
        },
    
        text:{
            color: '#000000',
            fontStyle: 'italic',
            fontSize: 15,
            textAlign: 'center'
        },
    
        imageContain:{
            marginBottom: 20,
            alignItems: 'center',
            marginTop: 45
        },
    
        image:{
            width: 200,
            height: 200,
            resizeMode: 'contain'
        },
    
        input:{
            backgroundColor: '#FFFFFF',
            padding: 15,
            borderRadius: 30,
            marginTop: 10,
            width: 300,
            marginHorizontal: 60,
        },
    
        btn:{
            backgroundColor:'#143354',
            fontSize: 25,
            borderRadius: 20,
            width: 150,
            padding: 10,
            textAlign: 'center',
            marginTop: 50,
            left: 120
        },
    
        textbtn:{
            color: '#FFFFFF',
            fontSize: 15,
            textAlign: 'center',
            fontWeight: 'bold'
        }
})
    
export default Register

