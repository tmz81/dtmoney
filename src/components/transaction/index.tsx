import { Container, } from "./style";

export function Transaction() {
  return (
    <Container>
      <table>
        <thead>
          <th>Title</th>
          <th>Value</th>
          <th>Category</th>
          <th>Data</th>
        </thead>
      </table>

      <tbody>
        <tr>
          <tr>iPhone 8</tr>
          <tr className="deposit">R$2,200,00</tr>
          <tr>Venda</tr>
          <tr>20/02/2021</tr>
        </tr>
        <tr>
          <tr>Tv LG Smart 8k</tr>
          <tr className="widthdraw">R$11,599,00</tr>
          <tr>Compra</tr>
          <tr>20/02/2021</tr>
        </tr>
      </tbody>
    </Container>
  )
}