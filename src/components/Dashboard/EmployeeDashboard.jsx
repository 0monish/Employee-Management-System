import React from 'react'
import Header from '../layout/Header'
import TaskListNumber from '../layout/TaskListNumber'
import TaskList from '../TaskLIst/TaskList'

const EmployeeDashboard = () => {
    return (
        <>
            <Header />
            <TaskListNumber />
            
            <TaskList/>
        </>
    )
}

export default EmployeeDashboard