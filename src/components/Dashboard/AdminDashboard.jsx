import React from 'react'
import Header from '../layout/Header'
import CreateTask from '../layout/CreateTask'
import AllTask from '../layout/AllTask'

const AdminDashboard = ({changeUser}) => {
    return (
        <>
            <Header changeUser={changeUser} />
            <CreateTask/>
            <AllTask/>
        </>
    )
}

export default AdminDashboard