import { Global } from "./styles/global"
import { Header } from "./components/header"
import { Dashboard } from "./components/dashboard"

function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <Global />
    </>
  )
}

export default App
