// Home.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button } from 'react-native';

const Home = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login logic here
    // For simplicity, we're just navigating to the main page
    navigation.navigate('Main');
  };

  const handleSignup = () => {
    // Implement signup logic here
    // For simplicity, we're just navigating to the main page
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('./logo.jpg')} style={styles.logo} />
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Login" onPress={handleLogin} />
        <Button title="Signup" onPress={handleSignup} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f0d0',
  },
  logoContainer: {
    marginBottom: 50,
  },
  logo: {
    width: 250,
    height: 120,
    resizeMode: 'contain',
  },
  formContainer: {
    width: '80%',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    padding: 10,
  },
});

export default Home;
