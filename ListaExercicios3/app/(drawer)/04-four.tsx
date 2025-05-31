import { StyleSheet, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { Text, View } from '@/components/Themed';

import * as Contacts from 'expo-contacts';

export default function TabFourScreen() {
  const [contacts, setContacts] = useState<Contacts.Contact[]>([]);
	const getContacts = async() => {
		const { status } = await Contacts.requestPermissionsAsync();
		if(status === 'granted'){
			const { data } = await Contacts.getContactsAsync({
				fields: [Contacts.Fields.FirstName],
			});

			if(data.length > 0){
				const filtered = data.filter(contact =>
					contact.firstName && contact.firstName[0].toUpperCase() === 'C'
				);
				setContacts(filtered);
			}
		}
	};

	useEffect(() => {
		getContacts();
	}, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contatos começando com a letra C:</Text>
			<FlatList
				data={contacts}
				keyExtractor={(item) => String(item.id)}
				renderItem={({ item }) => <Text>{item.firstName}</Text>}
			/>
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
