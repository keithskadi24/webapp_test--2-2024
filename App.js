import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ResultPage from './ResultPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ headerShown: false }} // Hide the header
        />
        <Stack.Screen
          name="Result"
          component={ResultPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomePage = ({ navigation }) => {
  const [imageUri, setImageUri] = useState(null);

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

  const signOut = () => {
    // Perform sign out actions here
  };

  return (
    <View style={[styles.container, { backgroundColor: '#f9f0d0' }]}>
      <View style={[styles.header, { backgroundColor: '#78A083', height: 80 }]}>
        <View style={styles.headerSection}>
          <TouchableOpacity onPress={() => {}} onMouseOver={(e) => e.target.style.backgroundColor = '#B2B377'} style={[styles.headerButton]} activeOpacity={0.5} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'} >
            <Text style={styles.headerButtonText} onPress={() => {}} >Profile</Text>
          </TouchableOpacity>
          <View style={styles.headerDivider} />
          <TouchableOpacity onPress={signOut} onMouseOver={(e) => e.target.style.backgroundColor = '#B2B377'} style={[styles.headerButton]} activeOpacity={0.5} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'} >
            <Text style={styles.headerButtonText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.logoContainer}>
          <Image source={require('./logo.jpg')} style={styles.logo} />
        </View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  headerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%', // Adjust height to match header height
  },
  headerButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 10,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  logo: {
    width: 120,
    height: 50,
    resizeMode: 'contain',
  },
  headerDivider: {
    height: '80%',
    width: 1,
    backgroundColor: '#114232', // Change color here
    marginHorizontal: 5, // Adjusted margin here
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
  previewContainer: {
    alignItems: 'center',
  },
  previewLabel: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imagePreviewContainer: {
    width: 200,
    height: 200,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#87A922', // Button box color
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
  bottomButtonContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default App;
