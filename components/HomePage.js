import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to SafeSight</Text>
      <Button title="Track Me" onPress={() => navigation.navigate('TrackMe')} />
      <Button title="Maps" onPress={() => navigation.navigate('Maps')} />
      <Button title="Self Protection Tips" onPress={() => navigation.navigate('SelfProtectionTips')} />
      <Button title="Chat" onPress={() => navigation.navigate('Chat')} />
      <Button title="Emergency Contacts" onPress={() => navigation.navigate('EmergencyContacts')} />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    color: '#6A5ACD',
  },
});

export default HomePage;
