import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

import App from './App'

import { CartProvider } from './context/CartContext'
import { FavoriteProvider } from './context/FavoriteContext'
import { AuthProvider }
  from './context/AuthContext'

import './index.css'

ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <FavoriteProvider>

            <App />

          </FavoriteProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)