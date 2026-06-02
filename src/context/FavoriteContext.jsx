import {
  createContext,
  useContext,
  useEffect,
  useState
} from 'react'

import { useAuth } from './AuthContext'

const FavoriteContext = createContext()

export function FavoriteProvider({
  children
}) {
  const { user } = useAuth()

  const [favorites, setFavorites] =
    useState([])

  useEffect(() => {
    if (user) {
      const savedFavorites =
        localStorage.getItem(
          `favorites-${user.uid}`
        )

      if (savedFavorites) {
        setFavorites(
          JSON.parse(savedFavorites)
        )
      }
    } else {
      setFavorites([])
    }
  }, [user])

  useEffect(() => {
    if (user) {
      localStorage.setItem(
        `favorites-${user.uid}`,
        JSON.stringify(favorites)
      )
    }
  }, [favorites, user])

  const addToFavorites = product => {
    const exists = favorites.find(
      item => item.id === product.id
    )

    if (!exists) {
      setFavorites([
        ...favorites,
        product
      ])
    }
  }

  const removeFromFavorites = id => {
    setFavorites(
      favorites.filter(
        item => item.id !== id
      )
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