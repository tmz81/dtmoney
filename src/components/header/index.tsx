import logo from '../../assets/logo.svg'
import { Container, Content } from "./style";

interface HeaderProps {
  handlerOpenModal: () => void;
}

export function Header({handlerOpenModal} : HeaderProps) {
  return(
    <Container>
      <Content>
        <img src={logo} alt="dt money" />
        <button type="button" onClick={handlerOpenModal}>
          New Transition
        </button>
      </Content>
    </Container>
  )
}