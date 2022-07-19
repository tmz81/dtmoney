import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

export function Transaction() {
  useEffect(() => {
    api.get('/transactions')
      .then(response => console.log(response.data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>iPhone 8</td>
            <td className="deposit">R$2,200,00</td>
            <td>Venda</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Tv LG Smart 8k</td>
            <td className="widthdraw">- R$11,599,00</td>
            <td>Compra</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}