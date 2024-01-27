import React, { useState } from "react";
import { Image, 
    Pressable, 
    SafeAreaView, 
    StyleSheet, 
    Text, 
    View,
    Modal
} from 'react-native'
import Login from "./components/Login"
import Register from "./components/Register"

const App = () => {

    const [loginModalVisible, setLoginModalVisible] = useState(false)
    const [registerModalVisible, setRegisterModalVisible] = useState (false)

    const handleLogin = () => {
        setLoginModalVisible(true)
    }

    const handleCloseLogin = () => {
        setLoginModalVisible(false);
    }

    const handleRegister = () => {
        setRegisterModalVisible(true)
    }

    const handleCloseRegister = () => {
        setRegisterModalVisible(false)
    }



    return(
        <SafeAreaView style={style.contains}>
            <Text style={style.title}>GYM</Text>
            <Text style={style.subtitle}>LIFESTYLE</Text>

            <View style={style.imageContain}>
                <Image source={require('./assets/Gym.jpg')} style={style.image}/>
            </View>

            <Text style={style.text}>"BE STRONGER THAT YOUR EXCUSES"</Text>

            <View>
                <Pressable style={style.btn} onPress={handleLogin}> 
                    <Text style={style.textbtn}>LOGIN</Text>
                </Pressable>
            </View>

            <View>
                <Pressable style={style.btnReg} onPress={handleRegister}> 
                    <Text style={style.textbtn}>REGISTER</Text>
                </Pressable>
            </View>

            <Modal visible={loginModalVisible} animationType='slide'>
             <Login onBack={handleCloseLogin} />
            </Modal>

            <Modal visible={registerModalVisible} animationType="slide">
                <Register onBack={handleCloseRegister}/>
            </Modal>

        </SafeAreaView>

    )
}

const style = StyleSheet.create({
    contains:{
        flex: 1,
        alignItems: 'center'
    },

    title:{
        fontSize: 50,
        color: '#000000',
        textAlign: 'center',  
        fontStyle: 'italic',
        marginTop: 45
    },

    subtitle:{
        fontSize: 25,
        color: '#000000',
        textAlign: 'center',
        fontStyle: 'italic'
    },

    text:{
        color: '#000000',
        fontStyle: 'italic',
        fontSize: 15,
        textAlign: 'center'
    },

    imageContain:{
        marginBottom: 20,
        alignItems: 'center'
    },

    image:{
        width: 300,
        height: 300,
        resizeMode: 'contain'
    },
    
    btn:{
        backgroundColor:'#143354',
        fontSize: 25,
        borderRadius: 20,
        width: 150,
        padding: 10,
        textAlign: 'center',
        marginTop: 60
    },

    btnReg:{
        backgroundColor:'#143354',
        fontSize: 25,
        borderRadius: 20,
        width: 150,
        padding: 10,
        textAlign: 'center',
        marginTop: 20
    },

    textbtn:{
        color: '#FFFFFF',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})

export default App