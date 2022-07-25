import Modal from "react-modal";
import { Container, TransactionTypeContainer } from "./style";
import imgCloseModal from "../../assets/fechar.svg"
import imgInput from "../../assets/entradas.svg";
import imgOutput from "../../assets/saidas.svg";

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
          <TransactionTypeContainer>
            <button type="button">
              <img src={imgInput} alt="Entrada" />
              <span>Entrada</span>
            </button>
            <button type="button">
              <img src={imgOutput} alt="Saida" />
              <span>Saída</span>
            </button>
          </TransactionTypeContainer>
          <input placeholder="Categoria"/>
          <button type="submit">
              Cadastrar
          </button>
        </Container>
    </Modal>
  )
}
