import { useEffect, useState } from 'react'
import { UserContext } from './context'
const API_URL = 'http://localhost:3000/api/auth'

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(() => Boolean(localStorage.getItem('accessToken')))

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')

    if (!accessToken) {
      return
    }

    fetch(`${API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error('Unable to fetch user')
        }

        return response.json()
      })
      .then((result) => setUser(result.data.user))
      .catch(() => {
        localStorage.removeItem('accessToken')
        setUser(null)
      })
      .finally(() => setLoading(false))
  }, [])

  const logout = () => {
    localStorage.removeItem('accessToken')
    setUser(null)
  }

  return (
    <UserContext.Provider value={{ user, loading, setUser, logout }}>
      {children}
    </UserContext.Provider>
  )
}
