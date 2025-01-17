import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
// localStorage.clear()
  const [userData, setUserData] = useState(null)

  // IT IS TO SET AND GET THE LOCAL STORAGE DATA 
  useEffect(() => {
    setLocalStorage()
    const { employees, admin } = getLocalStorage()
    setUserData({ employees, admin })
    // console.log("Executed")
  }, [])


  return (
    <>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </>
  )
}

export default AuthProvider