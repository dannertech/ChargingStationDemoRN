import React, {useState, useReducer} from 'react';
import {StyleSheet, Text,View, Image, TouchableOpacity, TextInput} from 'react-native';
import auth from '@react-native-firebase/auth';

const Login = (props) => {
    
console.log(props.route.params.functionLogin);
    return (
        <View style={styles.mainView}>
            <Image source={require('../Assets/Images/lightning-bolt.png')} style={styles.iconImageStyle} />
            <Image
            source={require('../Assets/Images/car-blueprint-edit.png')} style={styles.imageStyle}
            />
            
            <View style={styles.secondaryView}>
                <View style={styles.textStyle}>
                <Image source={require('../Assets/Images/211660_email_icon.png')} style={styles.iconStyle}/>
                <TextInput
                placeholder="Email"
                >
                </TextInput>
                </View>

                <View style={styles.textStyle}>
                <Image source={require('../Assets/Images/103178_lock_security_password_secure_unlock_icon.png')} style={styles.iconStyle}/>
                <TextInput placeholder="Password">
                </TextInput>
                </View>
                
            <TouchableOpacity style={styles.buttonStyle}
           
            >
                <Text style={{fontSize: 20, fontWeight: 'bold',}}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButtonStyle}
            onPress={() => props.navigation.navigate('Signup')}
            >
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18, textDecorationLine: 'underline'}}>or Sign Up</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    iconImageStyle: {
        height: 180,
        width: 100,
        alignSelf: 'center',
        marginTop: 70
    },
    mainView: {
        backgroundColor: '#000',
        height: '100%',
    },
    imageStyle: {
     position: 'absolute',
     alignSelf: 'center'    
    },
    textStyle: {
        marginTop: 20,
        height: 40,
        borderRadius: 5,
        color: 'white',
        borderColor: 'red',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center'
    },
    secondaryView : {
        marginHorizontal: 50,
        marginTop: 100
    },
    iconStyle: {
        height: 30,
        width: 30,
        alignSelf: 'flex-start',
        marginHorizontal: 10,
        marginVertical: 5
    },
    buttonStyle: {
        marginTop: 20,
        height: 40,
        borderRadius: 5,
        color: 'white',
        borderColor: 'red',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#07CFF6'
    },
    secondaryButtonStyle: {
        marginTop: 20,
        height: 40,
        borderRadius: 5,
        color: 'white',
        borderColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        
    }
   
});

export default Login;