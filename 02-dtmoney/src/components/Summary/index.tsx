import { useTransaction } from '../../hooks/useTransaction';

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import { Container } from "./styles";

export function Summary() {
    const { transactions } = useTransaction()
    
    const totalDeposit = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            return acc + transaction.amount
        }

        return acc
    }, 0)

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraw += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc
    }, {
        deposits: 0,
        withdraw: 0,
        total: 0
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>
                    -
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdraw)}
                </strong>
            </div>
            <div className="highlight_background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="total" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}