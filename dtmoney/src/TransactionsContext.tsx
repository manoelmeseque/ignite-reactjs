import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api';

interface Transaction {
    id: number;
    title: string;
    amount: number;
    category: string;
    type: string;
    createdAt: string;
}

interface TransactionProviderProps {
    children: ReactNode
}

interface TransactionContextData{
    transactions: Transaction[],
    createTransaction: (transaction: TransactionInput) => void
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

export const TransactionContext = createContext<TransactionContextData>(
    {} as TransactionContextData
)

export function TransactionProvider({children}: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transactions')
            .then(response => {
                setTransactions(response.data.transactions)
            });
    }, [])

    function createTransaction(transaction: TransactionInput) {
        api.post('/transactions', transaction)
    }

    return (
        <TransactionContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionContext.Provider>
    )
}