// AssessmentScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AssessmentScreen = () => {
  return (
    <View style={[styles.container, { backgroundColor: '#f9f0d0' }]}>
      <View style={styles.header}>
        <Image source={require('./logo.jpg')} style={styles.logo} />
      </View>
      <View style={styles.body}>
        <Text style={styles.text}>Assessment Screen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default AssessmentScreen;
