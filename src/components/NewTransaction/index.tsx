import Modal from "react-modal";
import imgInput from "../../assets/entradas.svg";
import imgOutput from "../../assets/saidas.svg";
import imgCloseModal from "../../assets/fechar.svg"
import { FormEvent, useState } from "react";
import { Container, TransactionTypeContainer, BoxButtons } from "./style";
import { api } from "../../services/api";

interface NewTransactionProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransaction({ isOpen, onRequestClose } : NewTransactionProps){
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {
      title,
      value,
      category,
      type
    };

    api.post('/transactions', data)
    
  }

  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      >
      <button 
        type="button" 
        onClick={onRequestClose}
        className="react-modal-close"
      > 
        <img src={imgCloseModal} alt="Close Modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar Nova Transação</h2>

          <input 
            value={title}  
            placeholder="Nome"
            onChange={e => setTitle(e.target.value)}
          />

          <input 
            type="number"
            value={value}
            placeholder="Preço"
            onChange={e => setValue(Number(e.target.value))}
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

          <input 
            value={category}
            placeholder="Categoria"
            onChange={e => setCategory(e.target.value)}  
          />
          <button type="submit">
              Cadastrar
          </button>
        </Container>
    </Modal>
  )
}
