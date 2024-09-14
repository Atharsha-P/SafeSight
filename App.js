import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, SafeAreaView } from 'react-native';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import TrackMePage from './components/TrackMePage';
import MapsPage from './components/MapsPage';
import SelfProtectionTipsPage from './components/SelfProtectionTipsPage';
import ChatPage from './components/ChatPage';
import EmergencyContactsPage from './components/EmergencyContactsPage';
import ProfilePage from './components/ProfilePage';
import SOSButton from './components/SOSButton';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="TrackMe" component={TrackMePage} />
          <Stack.Screen name="Maps" component={MapsPage} />
          <Stack.Screen name="SelfProtectionTips" component={SelfProtectionTipsPage} />
          <Stack.Screen name="Chat" component={ChatPage} />
          <Stack.Screen name="EmergencyContacts" component={EmergencyContactsPage} />
          <Stack.Screen name="Profile" component={ProfilePage} />
        </Stack.Navigator>
        <SOSButton />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA', // Lavender theme
  },
});

export default App;
