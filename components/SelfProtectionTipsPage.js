import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SelfProtectionTipsPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Self Protection Tips</Text>
      <Text>1. Be aware of your surroundings.</Text>
      <Text>2. Trust your instincts.</Text>
      <Text>3. Avoid distractions like mobile phones.</Text>
      {/* Add more tips as needed */}
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

export default SelfProtectionTipsPage;
