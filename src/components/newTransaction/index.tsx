import Modal from "react-modal";
import { Container } from "./style";

interface NewTransactionProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransaction({ isOpen, onRequestClose } : NewTransactionProps){
  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      >
      <Container>
          <h2>Cadastrar Nova Transação</h2>
          <input placeholder="Nome"/>
          <input 
            type="number"
            placeholder="Preço"
          />
          <input placeholder="Categoria"/>
          <button type="submit">
              Cadastrar
          </button>
        </Container>
    </Modal>
  )
}
