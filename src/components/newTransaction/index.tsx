import Modal from "react-modal";
import { Container } from "./style";

interface NewTransactionProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransaction({ isOpen, onRequestClose } : NewTransactionProps){
  return (
    <Container>
      <Modal 
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          >
          <h1>New Transactions Modal</h1>
        </Modal>
    </Container>
  )
}
