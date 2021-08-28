import React, {useState , useReducer} from "react";
import {StyleSheet,View,Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import Login from './src/Screens/Login';
import Signup from './src/Screens/Signup';
import Homepage from './src/Screens/Homepage';



const Stack = createStackNavigator();

function AppStack(){
  

  const [user, setUser] = useState();

  function signupUser(email, password, confirmPassword){
    if(email != null && email.length > 8){
      if(password == confirmPassword){
        auth().createUserWithEmailAndPassword(email, password).then((userCredential)=> {
          setState(userCredential.user);
        }).catch((error) => {
          console.log(error);
        })
      }
    }
  };

  function loginUser(email,password){
    if(email != null && password != null){
      auth().signInWithEmailAndPassword(email,password).then((userCredential) => {
        setUser(userCredential.user);
      })    
    }
  };
  
  return user ? (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
    <Stack.Screen
      name="Home"
      component={Homepage}
    />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen
      name="Signup"
      component={Signup}
      initialParams={{functionSignup: signupUser}}
      />
      <Stack.Screen
      name="Login"
      component={Login}
      initialParams={{functionLogin: loginUser}}
      />
    </Stack.Navigator>
  )
};

const App = () => {
  return(
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  
  )
};

export default App;
