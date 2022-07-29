import axios from 'axios';
import { createServer, Model } from 'miragejs';

export const api = axios.create({
  baseURL: 'https://dtmoney-beta-six.vercel.app/api',
});

export function createFakeAPI() {
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
            type: "withdraw",
            category: "Moradia",
            amount: 1400,
            createdAt: new Date('2022-07-10 09:25:42')
          }
        ] 
      })
    },
  
    routes() {
      this.namespace = 'api';
  
      this.get('/transactions', () => {
        return this.schema.all('transaction')
      })
  
      this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody)
  
        return schema.create('transaction', {...data, createdAt: new Date()})
      })
    }
  })
}
