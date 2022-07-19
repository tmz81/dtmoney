import { useState } from 'react';
import logo from '../../assets/logo.svg'
import { Container, Content } from "./style";
import Modal from "react-modal";

export function Header() {
  const [ isOpenModal, setIsOpenModal ] = useState(false);

  function openModal() {
    setIsOpenModal(true)
  }

  function closeModal() {
    setIsOpenModal(false)
  }
  
  return(
    <Container>
      <Content>
        <img src={logo} alt="dt money" />
        <button type="button" onClick={openModal}>
          New Transition
        </button>

        <Modal 
          isOpen={isOpenModal}
          onRequestClose={closeModal}
          >
          <h1>New Transactions Modal</h1>
        </Modal>
      </Content>
    </Container>
  )
}