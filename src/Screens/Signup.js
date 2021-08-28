import React, {useState, useReducer} from 'react';
import {StyleSheet, Text,View, Image, TouchableOpacity, TextInput} from 'react-native';




const Signup = (props) => {
    //console.log(props.route.params.functionSignup);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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
                autoCapitalize={false}
                autoCorrect={false}
                onChangeText={(value) => setEmail(value)}
                >
                </TextInput>
                </View>

                <View style={styles.textStyle}>
                <Image source={require('../Assets/Images/103178_lock_security_password_secure_unlock_icon.png')} style={styles.iconStyle}/>
                <TextInput placeholder="Password"
                secureTextEntry={true}
                onChangeText={(value) => setPassword(value)}
                >
                </TextInput>
                </View>
            
                <View style={styles.textStyle}>
                <Image source={require('../Assets/Images/103178_lock_security_password_secure_unlock_icon.png')} style={styles.iconStyle}/>
                <TextInput placeholder="Confirm Password" 
                secureTextEntry={true}
                onChangeText={(value) => setConfirmPassword(value)}
                />
                </View>
                
            <TouchableOpacity style={styles.buttonStyle}
            onPress={() => props.route.params.functionSignup(email, password, confirmPassword)}
            >
                <Text style={{fontSize: 20, fontWeight: 'bold',}}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButtonStyle}
            onPress={() => props.navigation.navigate('Login')}
            >
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18, textDecorationLine: 'underline'}}>or Log In</Text>
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

export default Signup;