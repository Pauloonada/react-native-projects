import axios from 'axios';

export async function buscarCep(cep: string) {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return response.data;
  }
  catch (error) {
    console.error('Erro ao buscar CEP:', error);
    return null;
  }
}