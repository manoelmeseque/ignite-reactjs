import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({

  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de Website',
          amount: 6000,
          category: 'dev',
          type: 'deposit',
          createdAt: new Date(),
        },
        {
          id: 2,
          title: 'Aluguel',
          amount: 1100,
          category: 'casa',
          type: 'withdraw',
          createdAt: new Date(),
        }]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = request.requestBody

      return schema.create('transaction', JSON.parse(data))
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
