import {
  createContext,
  useContext,
  useEffect,
  useState
} from 'react'

import {
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'

import {
  auth,
  provider
} from '../firebase/firebase'

const AuthContext = createContext()

export function AuthProvider({
  children
}) {
  const [user, setUser] = useState(null)

  const login = async () => {
    await signInWithPopup(
      auth,
      provider
    )
  }

  const logout = async () => {
    await signOut(auth)
  }

  useEffect(() => {
    const unsub =
      onAuthStateChanged(
        auth,
        currentUser => {
          setUser(currentUser)
        }
      )

    return unsub
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () =>
  useContext(AuthContext)