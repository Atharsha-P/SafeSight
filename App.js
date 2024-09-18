import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './screens/HomePage';
import EmergencyContactsPage from './screens/EmergencyContactsPage';
import SelfProtectionTipsPage from './screens/SelfProtectionTipsPage';
import ChatPage from './screens/ChatPage';
import ProfilePage from './screens/ProfilePage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6A5ACD',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Emergency Contacts" component={EmergencyContactsPage} />
        <Stack.Screen name="Self-Protection Tips" component={SelfProtectionTipsPage} />
        <Stack.Screen name="Chat" component={ChatPage} />
        <Stack.Screen name="Profile" component={ProfilePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
