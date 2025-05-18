import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CepProvider } from './contexts/CepContext';
import ConsultaScreen from './screens/ConsultaScreen';
import HistoricoScreen from './screens/HistoricoScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <CepProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="ViaCEP"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#222',
            },
            headerTintColor: '#fff',
            drawerStyle: {
              backgroundColor: '#121212',
            },
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#ccc',
          }}
        >
          <Drawer.Screen
            name="ViaCEP"
            component={ConsultaScreen}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="search-outline" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="Histórico"
            component={HistoricoScreen}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="time-outline" size={size} color={color} />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </CepProvider>
  );
}