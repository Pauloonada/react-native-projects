import { StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function TabThreeScreen() {
  const abrirInstagram = async() => {
  const username = 'etec_sjc195';
  const appUrl = `instagram://user?username=${username}`;
  const webUrl = `https://www.instagram.com/${username}/`;

  const supported = await Linking.canOpenURL(appUrl);

  if (supported) {
    Linking.openURL(appUrl);
  } else {
    Linking.openURL(webUrl);
  }
};


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={abrirInstagram}>
        <Text style={styles.title}>Instagram da ETEC</Text>
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
