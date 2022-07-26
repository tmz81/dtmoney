import { Global } from "./styles/global"
import { Header } from "./components/Header"
import { Dashboard } from "./components/Dashboard"
import { NewTransaction } from "./components/NewTransaction"
import { useState } from "react";
import Modal from "react-modal";
import { TransactionsContext } from "./hooks/TransactionsContext";

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
    <TransactionsContext.Provider value={[]}>
      <Header handlerOpenModal={handlerOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransaction 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handlerCloseNewTransactionModal} 
      />
      <Global />
    </TransactionsContext.Provider>
  )
}

export default App
