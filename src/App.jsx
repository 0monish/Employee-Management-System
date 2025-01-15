import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [adminData, setAdminData] = useState(null)
  const [empData, setEmpData] = useState(null)

  const authData = useContext(AuthContext)
  // console.log(authData)

  // THIS IS TO CHECK THAT IF THE USER IS ALREADY LOGGED IN OR NOT
  useEffect(() => {
    if (authData) {
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))

      if (loggedInUser) {
        setUser(loggedInUser.role)
      }
    }
    // console.log(loggedInUser.role)
    console.log("Executed")
    // CAN BE WRITTEN IN A SINGLE LINE
    // authData && localStorage.getItem("loggedInUser") && setUser(localStorage.getItem("loggedInUser").role)

  }, [authData])


  const handleLogin = (email, password) => {

    if (authData) {

      setAdminData(authData.admin.find(admin => (admin.email === email && admin.password === password)))
      setEmpData(authData.employees.find(emp => (emp.email === email && emp.password === password)))
      
      if (adminData) {
        // THIS IS SET TO GET TO THE ADMIN DASHBOARD
        setUser('admin')

        // CREATING A NEW ONBJECT IN LOCAL STORAGE FOR LOGGED IN USER 
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }))
        // console.log("Admin")
      }

      else if (empData) {

        // THIS IS SET TO GET TO THE EMPLOYEE DASHBOARD
        setUser('employee')
        // CREATING A NEW ONBJECT IN LOCAL STORAGE FOR LOGGED IN USER 
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee" }))
        // console.log("User")
      }
      else {
        alert("Invalid credentials")
      }
    }
  }

  // console.log(empData)
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? <AdminDashboard userData={adminData} /> : (user === "employee" ? <EmployeeDashboard userData={empData} /> : "")}
    </>
  )
}

export default App