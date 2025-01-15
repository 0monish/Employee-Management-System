import React from 'react'
import Header from '../layout/Header'
import TaskListNumber from '../layout/TaskListNumber'
import TaskList from '../TaskLIst/TaskList'

const EmployeeDashboard = ({ userData }) => {


    // console.log(userData)
    return (
        <>
            <Header userData={userData} />
            <TaskListNumber userData={userData} />
            <TaskList userData={userData} />
        </>
    )
}

export default EmployeeDashboard