import { StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  const abrirYoutube = () => {
    const url = 'https://www.youtube.com/watch?v=A-xfhH7fP0g';
    Linking.openURL(url).catch(err => {console.error('Falha ao abrir URL:', err); return null;});
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={abrirYoutube}>
        <Text style={styles.title}>Abrir YouTube</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  btn: {
    width: '80%',
    padding: 10,
    backgroundColor: '#888',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
