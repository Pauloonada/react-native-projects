import React, { useContext } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { CepContext } from '../contexts/CepContext';

export default function HistoricoScreen() {
    const { history } = useContext(CepContext);

    return (
        <ScrollView style={styles.container}>
            { history && history.length === 0 ? (
                <Text>Nenhum CEP consultado ainda.</Text>
            ) : (
                history.map((item, index) => (
                    <View key={index} style={styles.item}>
                        <Text style={styles.textLight}>CEP: {item.cep}</Text>
                        <Text style={styles.textLight}>Endereço: {item.logradouro}</Text>
                        <Text style={styles.textLight}>Bairro: {item.bairro}</Text>
                        <Text style={styles.textLight}>Cidade: {item.localidade}</Text>
                        <Text style={styles.textLight}>Estado: {item.uf}</Text>
                    </View>
                ))
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#333',
    },
    
    item: {
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 10,
    },

    textLight: {
        color: '#fff',
        fontSize: 16,
    },
});
