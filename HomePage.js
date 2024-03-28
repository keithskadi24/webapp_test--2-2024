// HomePage.js
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  const [imageUri, setImageUri] = useState(null);
  const navigation = useNavigation();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImageUri(imageUrl);
  };

  const navigateToResultPage = () => {
    if (!imageUri) {
      alert("Select an image first");
    } else {
      navigation.navigate('Result');
    }
  };

  const navigateToSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={[styles.container, { backgroundColor: '#f9f0d0' }]}>
      <View style={styles.header}>
        <Image source={require('./logo.jpg')} style={styles.logo} />
      </View>
      <View style={styles.body}>
        <View style={styles.leftContainer}>
          <Text style={styles.directionsText}>Please select or upload a drone captured image to begin assessment</Text>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </View>
        <View style={styles.divider} />
        <View style={styles.rightContainer}>
          <View style={styles.previewContainer}>
            <Text style={styles.previewLabel}>Preview Image</Text>
            <View style={styles.imagePreviewContainer}>
              {imageUri ? (
                <Image source={{ uri: imageUri }} style={styles.imagePreview} />
              ) : (
                <Text>No image selected</Text>
              )}
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottomButtonContainer}>
        <Button title="Click to proceed to assessment" onPress={navigateToResultPage} />
      </View>
      <TouchableOpacity style={styles.signupLink} onPress={navigateToSignUp}>
        <Text style={styles.signupText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingTop: 50,
  },
  logo: {
    width: 250,
    height: 120,
    resizeMode: 'contain',
  },
  body: {
    flex: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  rightContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  divider: {
    width: 1,
    backgroundColor: 'transparent',
  },
  directionsText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputSelector: {
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  previewContainer: {
    alignItems: 'center',
  },
  previewLabel: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imagePreviewContainer: {
    width: 300,
    height: 300,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  bottomButtonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  signupLink: {
    position: 'absolute',
    bottom: 80,
    alignSelf: 'center',
  },
  signupText: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default HomePage;
