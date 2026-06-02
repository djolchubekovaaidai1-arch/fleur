import {
  createContext,
  useContext,
  useEffect,
  useState
} from 'react'

import { useAuth } from './AuthContext'

const CartContext = createContext()

export function CartProvider({ children }) {
  const { user } = useAuth()

  const [cart, setCart] = useState([])

  useEffect(() => {
    if (user) {
      const savedCart = localStorage.getItem(
        `cart-${user.uid}`
      )

      if (savedCart) {
        setCart(JSON.parse(savedCart))
      }
    } else {
      setCart([])
    }
  }, [user])

  useEffect(() => {
    if (user) {
      localStorage.setItem(
        `cart-${user.uid}`,
        JSON.stringify(cart)
      )
    }
  }, [cart, user])

  const addToCart = product => {
    const exists = cart.find(
      item => item.id === product.id
    )

    if (exists) {
      setCart(
        cart.map(item =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        )
      )
      return
    }

    setCart([
      ...cart,
      {
        ...product,
        quantity: 1
      }
    ])
  }

  const removeFromCart = id => {
    setCart(
      cart.filter(item => item.id !== id)
    )
  }

  const increaseQuantity = id => {
    setCart(
      cart.map(item =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    )
  }

  const decreaseQuantity = id => {
    setCart(
      cart.map(item =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(
                1,
                item.quantity - 1
              )
            }
          : item
      )
    )
  }

  const clearCart = () => {
    setCart([])

    if (user) {
      localStorage.removeItem(
        `cart-${user.uid}`
      )
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () =>
  useContext(CartContext)