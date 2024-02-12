'use client'

import {
    Dispatch,
    SetStateAction, // Interfaces para tipar o useState...
    useEffect,
    useState,
} from 'react'

// A resposta dessa função é um array...
type Response<T> = [
    // A resposta também passa o parâmetro T... T - Tipo do parametro...
    T, // Onde a primeira posição é uma variável no mesmo formato do parâmetro...
    Dispatch<SetStateAction<T>>, // E a segunda é uma função...
]

// <T> Aceita um formato que o tema vai ter...
// Response<T> fala que o retorno da função é uma resposta...
export const usePersistedState = <T>(
    key: string,
    initialState: T,
): Response<T> => {
    const [state, setState] = useState(() => {
        const storageValue = localStorage.getItem(key)
        return storageValue ? JSON.parse(storageValue) : initialState
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState]
}
