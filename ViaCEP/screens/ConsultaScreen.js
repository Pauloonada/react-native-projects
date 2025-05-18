import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { CepContext } from '../contexts/CepContext';

export default function ConsultaScreen(){
    const [cep, setCep] = useState('');
    const { getCep, result } = useContext(CepContext);

    const handleSearch = async () => {
        if(!cep){
            Alert.alert('Erro', 'Por favor, insira um CEP válido.');
            return;
        }

        const data = await getCep(cep);

        if(data.erro){
            Alert.alert('Erro', 'CEP inválido ou não encontrado.');
            setCep('');
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.textLight}>CEP</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite o CEP"
                value={cep}
                onChangeText={setCep}
                keyboardType="numeric"
            />
            <TouchableOpacity onPress={handleSearch} style={styles.button}>
                <Text style={[styles.textDark, styles.textBold]}>Buscar</Text>
            </TouchableOpacity>
            {result && (
                <View style={styles.resultContainer}>
                    <Text style={styles.textLight}>CEP: {result.cep}</Text>
                    <Text style={styles.textLight}>Endereço: {result.logradouro}</Text>
                    <Text style={styles.textLight}>Bairro: {result.bairro}</Text>
                    <Text style={styles.textLight}>Cidade: {result.localidade}</Text>
                    <Text style={styles.textLight}>Estado: {result.uf}</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#333',
        justifyContent: 'center',
    },

    input: {
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 8,
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#fff',
        fontSize: 16,
    },

    resultContainer: {
        marginTop: 20,
    },

    textLight:{
        color: '#fff',
        fontSize: 16,
    },

    textDark:{
        color: '#000',
        fontSize: 16,
    },

    textBold:{
        fontWeight: 'bold',
    },

    button:{
        backgroundColor: '#ee0',
        color: '#000',
        alignItems: 'center',
        padding: 10,
        borderRadius: 8,
        marginTop: 10,
    },
});