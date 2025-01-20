import React from 'react'
import Header from '../layout/Header'
import CreateTask from '../layout/CreateTask'
import AllTask from '../layout/AllTask'

const AdminDashboard = ({changeUser, userData, updateEmpData}) => {
    return (
        <>
            <Header changeUser={changeUser} />
            <CreateTask userData={userData} updateEmpData={updateEmpData} />
            <AllTask/>
        </>
    )
}

export default AdminDashboard