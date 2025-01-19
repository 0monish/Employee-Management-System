import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null)

  // IT IS TO SET AND GET THE LOCAL STORAGE DATA 
  useEffect(() => {
    setLocalStorage()
    const { employees, admin } = getLocalStorage()
    setUserData({ employees, admin })
    // console.log("Executed")
  }, [])

  const updateEmpData = (updatedEmpData) => {
    setUserData((prevState) => {
      const updatedUserData = { ...prevState, employees: updatedEmpData };
      localStorage.setItem('employees', JSON.stringify(updatedEmpData));
      return updatedUserData;
    });
  };

  return (
    <>
      <AuthContext.Provider value={{ userData, updateEmpData }}>
        {children}
      </AuthContext.Provider>
    </>
  )
}

export default AuthProvider