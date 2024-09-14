import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const EmergencyContactsPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emergency Contacts</Text>
      {/* Display and manage contacts here */}
      <Button title="Add Contact" onPress={() => {/* Add contact */}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#6A5ACD',
  },
});

export default EmergencyContactsPage;
