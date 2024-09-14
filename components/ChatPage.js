import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const ChatPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat with Support</Text>
      {/* Placeholder for chat messages */}
      <TextInput placeholder="Type your message here" style={styles.input} />
      <Button title="Send" onPress={() => {/* Send message */}} />
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
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default ChatPage;
