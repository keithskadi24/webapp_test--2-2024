import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ResultPage = ({ navigation }) => {
  const goToHome = () => {
    navigation.navigate('Home');
  };

  const signOut = () => {
    // Perform sign out actions here
  };

  return (
    <View style={[styles.container, { backgroundColor: '#f9f0d0' }]}>
      <View style={[styles.header, { backgroundColor: '#78A083', height: 80 }]}>
        <View style={styles.headerSection}>
          <TouchableOpacity onPress={goToHome} onMouseOver={(e) => e.target.style.backgroundColor = '#B2B377'} style={[styles.headerButton]} activeOpacity={0.5} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'} >
            <Text style={styles.headerButtonText}>Back</Text>
          </TouchableOpacity>
          <View style={styles.headerDivider} />
          <TouchableOpacity onPress={() => {}} onMouseOver={(e) => e.target.style.backgroundColor = '#B2B377'} style={[styles.headerButton]} activeOpacity={0.5} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'} >
            <Text style={styles.headerButtonText}>Profile</Text>
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
          <Text style={styles.resultText}>Assessment Result</Text>
          <View style={styles.resultContainer}>
            {/* Display severity level here */}
            <Text>Severity Level: High</Text>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.rightContainer}>
          <Text style={styles.resultText}>Drone and Environment Details</Text>
          <View style={styles.detailsContainer}>
            {/* Display drone and environment details here CAN BE CONSTANT OR VARYING?? */}
            <Text>Drone Model: DJI Mavic Air 2</Text>
            <Text>Environment: Urban</Text>
            <Text>Weather: Sunny</Text>
            {/* Add more details as needed */}
          </View>
        </View>
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
    backgroundColor: 'black',
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  resultContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  detailsContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default ResultPage;
