import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const userData = useContext(AuthContext)


  // THIS IS TO CHECK THAT IF THE USER IS ALREADY LOGGED IN OR NOT
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))
    if (loggedInUser) {
      setUser(loggedInUser.role)
      setLoggedInUserData(loggedInUser.userData)
    }

    // console.log(loggedInUser.role)
    console.log("Executed")
    // CAN BE WRITTEN IN A SINGLE LINE
    // userData && localStorage.getItem("loggedInUser") && setUser(localStorage.getItem("loggedInUser").role)

  }, [])


  const handleLogin = (email, password) => {

    //  console.log("From App - ", email, password)

    if (userData) {
      console.log("From App under auth - ", email, password)

      const aData = userData.admin.find(admin => (admin.email === email && admin.password === password))
      const eData = userData.employees.find(emp => (emp.email === email && emp.password === password))

      if (aData) {
        setUser('admin');
        setLoggedInUserData(""); // SETTING THE ADMIN DATA AS EMPTY BECAUSE IT IS NOT REQUIRED
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', userData: "" }));
      }

      else if (eData) {
        setUser('employee');
        setLoggedInUserData(eData);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', userData: eData }));
      }

      else {
        alert("Invalid credentials")
      }
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? <AdminDashboard /> : (user === "employee" ? <EmployeeDashboard userData={loggedInUserData} /> : "")}
    </>
  )
}

export default App