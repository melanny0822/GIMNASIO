import React, { useState } from "react";
import { Alert, 
    Pressable, 
    ScrollView, 
    StyleSheet, 
    Text, 
    TextInput, 
    View,
    Image, 
} from 'react-native'
import { validateUser } from "./AuthManager";

const Login = ({onLogin, onBack}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] =useState('')

    const handleLogin =() =>{
        if (username && password){
            if (validateUser(username, password)){
                Alert.alert('BIENVENIDO', 'Inicio de sesion exitoso')
            } else {
                Alert.alert ('ERROR','Inicio de sesion fallido, verifique su usuario y/o contraseña')
            }
        }
    }


    return(
        <View style={style.contain}>
            <ScrollView>
                <View style={style.imageContain}>
                    <Image source={require('../assets/f.jpg')} style={style.image}/>
                </View>

                <Text style={style.title}>BIENVENIDO</Text>
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

                <Pressable style={style.btn} onPress={handleLogin}>
                    <Text style={style.textbtn}>LOGIN</Text>
                </Pressable>

                <Pressable style={style.btn} onPress={onBack}>
                    <Text style={style.textbtn}>BACK</Text>
                </Pressable>

            </ScrollView>
        
        </View>

    )
}

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
        marginTop: 20,
        left: 120
    },

    textbtn:{
        color: '#FFFFFF',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})

export default Login