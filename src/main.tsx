import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelancer website",
          type: "deposit",
          category: "Trabalho",
          amount: 6000,
          createdAt: new Date('2022-07-26 09:25:42')
        },
        {
          id: 2,
          title: "Alugel",
          type: "widthdraw",
          category: "Moradia",
          amount: 1400,
          createdAt: new Date('2022-07-10 09:25:42')
        }
      ] 
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('/transaction', data)
    })
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
