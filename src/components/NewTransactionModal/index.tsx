import Modal from "react-modal";
import imgInput from "../../assets/entradas.svg";
import imgOutput from "../../assets/saidas.svg";
import imgCloseModal from "../../assets/fechar.svg"
import { FormEvent, useState, useContext } from "react";
import { Container, TransactionTypeContainer, BoxButtons } from "./style";
import { TransactionsContext } from "../../context/TransactionsContext";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose } : NewTransactionModalProps){
  const { createTransaction } = useContext(TransactionsContext);

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState<number | string>('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount: Number(amount),
      category,
      type,
    });

    setTitle('');
    setAmount('');
    setCategory('');
    setType('deposit');

    onRequestClose()
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
            value={amount}
            placeholder="Preço"
            onChange={e => setAmount(e.target.value)}
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
