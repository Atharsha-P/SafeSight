import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';  // Gradient import
import { Ionicons } from '@expo/vector-icons';  // For icons

const HomePage = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#E6E6FA', '#D8BFD8', '#F3E5F5']}  // Lavender gradient
      style={styles.gradientBackground}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to SafeSight</Text>
        
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TrackMe')}>
          <Ionicons name="location-outline" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Track Me</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Maps')}>
          <Ionicons name="map-outline" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Maps</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SelfProtectionTips')}>
          <Ionicons name="shield-outline" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Self Protection Tips</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Chat')}>
          <Ionicons name="chatbubbles-outline" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EmergencyContacts')}>
          <Ionicons name="people-outline" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Emergency Contacts</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-outline" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 28,
    marginBottom: 30,
    color: '#6A5ACD',  // Lavender color
    fontWeight: 'bold',
  },
  button: {
    flexDirection: 'row',  // Icon and text side by side
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6A5ACD',  // Lavender button color
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginVertical: 10,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',  // White text
    fontSize: 18,
    fontWeight: '500',
  },
});

export default HomePage;
