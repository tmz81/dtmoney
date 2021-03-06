import { Global } from "./styles/global"
import { Header } from "./components/Header"
import { Dashboard } from "./components/Dashboard"
import { NewTransactionModal } from "./components/NewTransactionModal"
import { useState } from "react";
import Modal from "react-modal";
import { TransactionsProvider } from "./context/TransactionsContext";

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
    <TransactionsProvider>
      <Header handlerOpenModal={handlerOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handlerCloseNewTransactionModal} 
      />
      <Global />
    </TransactionsProvider>
  )
}

export default App
