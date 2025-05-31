import { StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function TabTwoScreen() {
  const ligacao = () => {
    Linking.openURL('tel:777').catch(err => console.error('Erro ao abrir o discador: ', err));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={ligacao}>
        <Text style={styles.title}>Ligar para o número</Text>
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
