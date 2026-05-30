import { createContext, useContext, useState } from 'react'

const FavoriteContext = createContext()

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([])

  const addToFavorites = product => {
    const exists = favorites.find(
      item => item.id === product.id
    )

    if (!exists) {
      setFavorites([...favorites, product])
    }
  }

  const removeFromFavorites = id => {
    setFavorites(
      favorites.filter(item => item.id !== id)
    )
  }

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites
      }}
    >
      {children}
    </FavoriteContext.Provider>
  )
}

export const useFavorites = () =>
  useContext(FavoriteContext)