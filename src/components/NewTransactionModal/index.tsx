import Modal from "react-modal";
import imgInput from "../../assets/entradas.svg";
import imgOutput from "../../assets/saidas.svg";
import imgCloseModal from "../../assets/fechar.svg";
import { FormEvent, useState, useContext } from "react";
import { Container, TransactionTypeContainer, BoxButtons } from "./style";
import { TransactionsContext } from "../../context/TransactionsContext";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionsContext);

  const [state, setState] = useState({
    title: { value: "", erro: false },
    amount: { value: "", erro: false },
    category: { value: "", erro: false },
    type: { value: "", erro: false },
  });

  // const [title, setTitle] = useState('');
  // const [amount, setAmount] = useState(0);
  // const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  // async function handleCreateNewTransaction(event: FormEvent) {
  //   event.preventDefault();

  //   await createTransaction({
  //     title,
  //     amount,
  //     category,
  //     type,
  //   });

  //   setState({
  //     title: { value: "", erro: false },
  //     amount: { value: "", erro: false },
  //     category: { value: "", erro: false },
  //     type: { value: "deposit", erro: false },
  //   });

  //   // setTitle("");
  //   // setAmount(0);
  //   // setCategory("");
  //   setType("deposit");

  //   onRequestClose();
  // }

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

      <Container>
        <h2>Cadastrar Nova Transação</h2>

        <input
          placeholder="Nome"
          value={state.title.value}
          onChange={(e) =>
            setState((state) => ({
              ...state,
              title: { value: e.target.value, erro: false },
            }))
          }
        />

        <input
          type="number"
          value={state.amount.value}
          placeholder="Preço"
          onChange={(e) =>
            setState((state) => ({
              ...state,
              amount: { value: e.target.value, erro: false },
            }))
          }
        />

        <TransactionTypeContainer>
          <BoxButtons
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            ActiveColor="green"
          >
            <img src={imgInput} alt="Entrada" />
            <span>Entrada</span>
          </BoxButtons>

          <BoxButtons
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            ActiveColor="red"
          >
            <img src={imgOutput} alt="Saida" />
            <span>Saída</span>
          </BoxButtons>
        </TransactionTypeContainer>

        <input
          value={state.category.value}
          placeholder="Categoria"
          onChange={(e) =>
            setState((state) => ({
              ...state,
              category: { value: e.target.value, erro: false },
            }))
          }
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
