import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createServer } from 'miragejs';

createServer({
  // Cria uma "servidor" que vai interceptar as requisições feitas a uma API
  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      // requisições feitas para essa rota, retorna o objeto abaixo
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'food',
          createdAt: new Date()
        }
      ]
    })
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
