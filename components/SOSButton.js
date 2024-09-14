import React from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const SOSButton = () => {
  const sendSOS = async () => {
    try {
      await axios.get('https://your-streamlit-app-url.com');
      Alert.alert('SOS Alert Sent', 'Your SOS alert has been sent successfully!');
    } catch (error) {
      Alert.alert('Error', 'Failed to send SOS alert.');
    }
  };

  return (
    <View style={styles.sosButton}>
      <Button title="SOS" onPress={sendSOS} color="#fff" />
    </View>
  );
};

const styles = StyleSheet.create({
  sosButton: {
    position: 'absolute',
    bottom: 10,
    left: '50%',
    transform: [{ translateX: -50 }],
    backgroundColor: '#6A5ACD', // Lavender button
    padding: 10,
    borderRadius: 50,
  },
});

export default SOSButton;
