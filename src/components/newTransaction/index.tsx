import Modal from "react-modal";
import { Container } from "./style";
import imgCloseModal from "../../assets/fechar.svg"

interface NewTransactionProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransaction({ isOpen, onRequestClose } : NewTransactionProps){
  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      >
      <button className="react-modal-close" type="button" onClick={onRequestClose}>
        <img src={imgCloseModal} alt="Close Modal" />
      </button>
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
