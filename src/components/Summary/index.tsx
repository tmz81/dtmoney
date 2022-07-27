import iconTotal from '../../assets/total.svg';
import iconInput from '../../assets/entradas.svg';
import iconOutput from '../../assets/saidas.svg';
import { Container } from './style';
import { useContext } from 'react';
import { TransactionsContext } from '../../context/TransactionsContext';

export function Summary() {
  const {transactions} = useContext(TransactionsContext);
  
  // const totalDeposits = transactions.reduce((acc, transaction) => {
  //   if(transaction.type === 'deposit') {
  //     return acc + transaction.amount;
  //   }

  //   return acc
  // }, 0)

  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  })

  return (
    <Container>
      <div>
        <header>
          <p>Input</p>
          <img src={iconInput} alt="Input" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Output</p>
          <img src={iconOutput} alt="Output" />
        </header>
        <strong>-{new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.withdraws)}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={iconTotal} alt="Total" />
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