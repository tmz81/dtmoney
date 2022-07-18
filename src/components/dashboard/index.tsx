import { Summary } from "../summary";
import { Transaction } from "../transaction";
import { Container } from "./style";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <Transaction />
    </Container>
  )
}