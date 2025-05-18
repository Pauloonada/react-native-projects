import React, { createContext, useState, ReactNode } from 'react';
import { CepData }  from '../types';

type CepContextType = {
    result: CepData | null;
    history: CepData[];
    getCep: (cep: string) => Promise<void>;
};

export const CepContext = createContext({} as CepContextType);

export const CepProvider = ({ children }: { children: ReactNode }) => {
    const [result, setResult] = useState<CepData | null>(null);
    const [history, setHistory] = useState<CepData[]>([]);

    const getCep = async (cep: string) => {
        const data = await buscarCep(cep);
        console.log(data);

        if(!data.erro){
            setResult(data);
            setHistory((prevHistory) => [...prevHistory, data]);
        }

        else{
            setResult({ cep, logradouro: '', bairro: '', localidade: '', uf: '', erro: true });
        }

        return data;
    };

    return (
        <CepContext.Provider value={{ result, history, getCep }}>
            {children}
        </CepContext.Provider>
    );
};

import { buscarCep } from '../services/viacep';