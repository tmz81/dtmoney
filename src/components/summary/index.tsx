import { Container } from './style';
import iconInput from '../../assets/entradas.svg';
import iconOutput from '../../assets/saidas.svg';
import iconTotal from '../../assets/total.svg';

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Input</p>
          <img src={iconInput} alt="Input" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Output</p>
          <img src={iconOutput} alt="Output" />
        </header>
        <strong>R$500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={iconTotal} alt="Total" />
        </header>
        <strong>R$1000,00</strong>
      </div>
    </Container>
  )
}