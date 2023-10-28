import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import BatteryInfo from './components/BatteryInfo';
import Tips from './components/Tips';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Battery saver" 
          component={HomeScreen}
          options={{
            title: 'Battery saver',
            headerStyle: {
              backgroundColor: '#55a36c',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Battery info" 
          component={BatteryInfo}
          options={{
            title: 'Battery information',
            headerStyle: {
              backgroundColor: '#55a36c',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Tips" 
          component={Tips}
          options={{
            title: 'Tips',
            headerStyle: {
              backgroundColor: '#55a36c',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}