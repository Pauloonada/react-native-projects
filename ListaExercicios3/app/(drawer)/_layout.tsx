import React from 'react';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

const orderedScreens = [
  { name: '01-index', title: 'Vídeo no Youtube', drawerLabel: 'Exercício 1' },
  { name: '02-two', title: 'Discar Número', drawerLabel: 'Exercício 2' },
  { name: '03-three', title: 'Instagram da Escola', drawerLabel: 'Exercício 3' },
  { name: '04-four', title: 'Listar Contatos', drawerLabel: 'Exercício 4 e 5' },
  { name: '06-six', title: 'Gerenciar Fotos', drawerLabel: 'Exercício 6, 7 e 8' },
];

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Drawer
      screenOptions={({ route }) => ({
        drawerActiveBackgroundColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: useClientOnlyValue(false, true),
        drawerActiveTintColor: '#ddd',
        drawerLabelStyle: { fontSize: 16 },
        drawerIcon: ({ color, size }: { color: string; size: number }) => {
          if(route.name === '01-index'){
            return <Ionicons name='logo-youtube' size={size} color={color} />
          }
          if(route.name === '02-two'){
            return <Ionicons name='call' size={size} color={color} />
          }
          if(route.name === '03-three'){
            return <Ionicons name='logo-instagram' size={size} color={color} />
          }
          if(route.name === '04-four'){
            return <Ionicons name='people' size={size} color={color} />
          }
          if(route.name === '06-six'){
            return <Ionicons name='camera' size={size} color={color} />
          }
        }
      })}
    >
    {orderedScreens.map((screen) => (
      <Drawer.Screen
        key={screen.name}
        name={screen.name}
        options={{ title: screen.title, drawerLabel: screen.drawerLabel }}
      />
    ))}
    </Drawer>
  );
}
