import React, { useState } from 'react';
import Header from '../layout/Header';
import TaskListNumber from '../layout/TaskListNumber';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = ({ userData }) => {
    const [filteredTasks, setFilteredTasks] = useState(userData.tasks);
    const [activeFilter, setActiveFilter] = useState(null); // Track active filter type

    const toggleFilter = (filterType) => {
        if (activeFilter === filterType) {
            // If the same filter is clicked again, show all tasks
            setFilteredTasks(userData.tasks);
            setActiveFilter(null); // Reset filter
        } else {
            // Otherwise, filter tasks based on the selected filter
            setFilteredTasks(userData.tasks.filter(task => task[filterType]));
            setActiveFilter(filterType); // Set new active filter
        }
    };

    return (
        <>
            <Header userData={userData} />
            {/* Pass setFilteredTasks and toggleFilter for task filtering */}
            <TaskListNumber userData={userData} toggleFilter={toggleFilter} />

            {/* Check if filteredTasks has no tasks and display the message */}
            {filteredTasks.length === 0 ? (

                <div className="h-80 overflow-x-auto py-5 items-center flex justify-center">
                    <div className="text-center text-3xl text-gray-500"><i>No task available</i> </div>
                </div >

            ) : (
                <TaskList userData={{ tasks: filteredTasks }} />
            )}
        </>
    );
};

export default EmployeeDashboard;
