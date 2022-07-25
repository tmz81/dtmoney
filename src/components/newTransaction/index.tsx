import Modal from "react-modal";
import { Container, TransactionTypeContainer, BoxButtons } from "./style";
import imgCloseModal from "../../assets/fechar.svg"
import imgInput from "../../assets/entradas.svg";
import imgOutput from "../../assets/saidas.svg";
import { useState } from "react";

interface NewTransactionProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransaction({ isOpen, onRequestClose } : NewTransactionProps){
  const [type, setType] = useState('deposit');

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
            <BoxButtons 
              type="button"
              onClick={() => {setType('deposit');}}
              isActive={type === 'deposit'}
              ActiveColor="green"
            >
              <img src={imgInput} alt="Entrada" />
              <span>Entrada</span>
            </BoxButtons>
            <BoxButtons 
              type="button"
              onClick={() => {setType('withdraw');}}
              isActive={type === 'withdraw'} 
              ActiveColor="red" 
            >
              <img src={imgOutput} alt="Saida" />
              <span>Saída</span>
            </BoxButtons>
          </TransactionTypeContainer>
          <input placeholder="Categoria"/>
          <button type="submit">
              Cadastrar
          </button>
        </Container>
    </Modal>
  )
}
