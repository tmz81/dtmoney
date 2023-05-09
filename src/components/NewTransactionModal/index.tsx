import Modal from "react-modal";
import imgInput from "../../assets/entradas.svg";
import imgOutput from "../../assets/saidas.svg";
import imgCloseModal from "../../assets/fechar.svg";
import { FormEvent, useState, useContext } from "react";
import { Container, TransactionTypeContainer, BoxButtons } from "./style";
import { TransactionsContext } from "../../context/TransactionsContext";
import { Button, Grid, InputAdornment, TextField } from "@mui/material";

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

  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title: {value: "", erro: false},
      amount,
      category,
      type,
    });

    setState({
      title: { value: "", erro: false },
      amount: { value: "", erro: false },
      category: { value: "", erro: false },
      type: { value: "deposit", erro: false },
    });

    // setAmount('');
    // setCategory("");
    // setType("deposit");

    onRequestClose();
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

      <Container>
        <h2>Cadastrar Nova Transação</h2>

        <Grid container spacing={2}>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <TextField
              fullWidth
              required
              label="Descrição"
              variant="outlined"
              value={state.title.value}
              error={state.title.erro}
              onChange={(e) =>
                setState((state) => ({
                  ...state,
                  title: { value: e.target.value, erro: false },
                }))
              }
              onBlur={(e) => {
                if (state.title.value === "") {
                  setState((state) => ({
                    ...state,
                    title: { value: e.target.value, erro: true },
                  }));
                }
              }}
            />
          </Grid>

          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <TextField
              fullWidth
              required
              label="Valor"
              variant="outlined"
              value={state.amount.value}
              error={state.amount.erro}
              onChange={(e) =>
                setState((state) => ({
                  ...state,
                  amount: { value: e.target.value, erro: false },
                }))
              }
              onBlur={(e) => {
                if (state.amount.value === "") {
                  setState((state) => ({
                    ...state,
                    amount: { value: e.target.value, erro: true },
                  }));
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">R$</InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>

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
