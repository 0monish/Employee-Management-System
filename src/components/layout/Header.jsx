import React from 'react'

const Header = ({ userData }) => {

  const userRole = JSON.parse(localStorage.getItem("loggedInUser")).role

  const logOutUser = () => {
    // SETTING THE LOGGED IN USER TO ROLE TO EMPTY STRING
    localStorage.setItem("loggedInUser", JSON.stringify({ role: "", userData: "" }))
    window.location.reload()
  }

  console.log(userRole)
  return (
    <header className="flex items-center justify-between px-6 py-5 bg-[#1c1c1c] border-b-4 border-cyan-300 rounded-b-3xl shadow-[0_10px_15px_-3px_rgba(0,191,255,0.5)]">

      <h1 className="text-xl text-white font-medium">
        Hello <br />
        <span className="text-3xl font-semibold hover:bg-violet-600 font-mono bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">
          {(userRole === "admin") ? "Admin" : userData.firstName}
        </span> {""}
        😎👋
      </h1>

      <button onClick={logOutUser} className="bg-red-500 hover:bg-red-700 active:scale-95 rounded-tr-none h-10 text-base font-semibold rounded-br-3xl rounded-tl-3xl rounded-bl-none px-3">
        Log Out
      </button>

    </header>
  );
}

export default Header