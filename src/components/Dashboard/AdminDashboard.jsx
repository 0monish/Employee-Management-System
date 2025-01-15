import React from 'react'
import Header from '../layout/Header'
import CreateTask from '../layout/CreateTask'
import AllTask from '../layout/AllTask'

const AdminDashboard = () => {
    return (
        <>
            <Header />
            <CreateTask/>
            <AllTask/>
        </>
    )
}

export default AdminDashboard