import { Global } from "./styles/global"
import { Header } from "./components/Header"
import { Dashboard } from "./components/Dashboard"
import { NewTransaction } from "./components/NewTransaction"
import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement('#root');

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handlerOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handlerCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }
  return (
    <>
      <Header handlerOpenModal={handlerOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransaction 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handlerCloseNewTransactionModal} 
      />
      <Global />
    </>
  )
}

export default App
