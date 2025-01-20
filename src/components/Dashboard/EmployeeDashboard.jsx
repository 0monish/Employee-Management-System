import React, { useState } from 'react';
import Header from '../layout/Header';
import TaskListNumber from '../layout/TaskListNumber';
import TaskList from '../TaskList/TaskList';

// HERE THREE PARAMETERS ARE TAKEN 
// userData FROM App.jsx LoggedInUser DATA
// changeUser IS FOR SETTING THE USER STATUS FOR MANAGING USER LOGOUT
// updateEmpData IS TO SEND THE UPDATED DATA BACK TO App.jsx TO UPDATE IN AuthContext

const EmployeeDashboard = ({ userData, changeUser, updateEmpData }) => {
    const [filteredTasks, setFilteredTasks] = useState(userData.tasks);
    const [activeFilter, setActiveFilter] = useState(null); // TRACK ACTIVE FILTER TYPE
    const [updatedUserData, setUpdatedUserData] = useState(userData); // ADD STATE FOR UPDATED USERDATA WHEN EMPLOYEE UPDATES THE TASK STATUS LIKE FROM NEW TASK TO ACTIVE TASK

    // FUNCTION TO ACCEPT THE TASK AND UPDATE THE TASK LIST, TASK COUNTS
    const updateTaskStatus = (id, taskStatus) => {

        const employeeData = JSON.parse(localStorage.getItem('employees'));
        const loggedInUserData = JSON.parse(localStorage.getItem('loggedInUser'));

        const updatedEmployeeData = employeeData.map(emp => {

            // CHECK IF THE LOGGED-IN USER IS THE SAME AS THE EMPLOYEE
            if (emp.id === loggedInUserData.userData.id) {
                // UPDATE tasks AND taskCounts FOR THE LOGGED-IN EMPLOYEE
                return {
                    ...emp,
                    tasks: emp.tasks.map(task => {
                        if (task.id === id) {

                            if (taskStatus === 'activeTask') {
                                return {
                                    ...task,
                                    activeTask: true,
                                    newTask: false
                                }
                            } else if (taskStatus === 'completedTask') {
                                return {
                                    ...task,
                                    completedTask: true,
                                    activeTask: false
                                }
                            }
                            else if (taskStatus === 'failedTask') {
                                return {
                                    ...task,
                                    failedTask: true,
                                    activeTask: false
                                }
                            }
                        }
                        return task;
                    }),
                    taskCounts: {
                        ...emp.taskCounts,
                        newTask: taskStatus === 'activeTask' ? emp.taskCounts.newTask - 1 : emp.taskCounts.newTask,
                        activeTask: taskStatus === 'activeTask' ? emp.taskCounts.activeTask + 1 : (taskStatus === 'failedTask' || taskStatus === 'completedTask') ? emp.taskCounts.activeTask - 1 : emp.taskCounts.activeTask,
                        completedTask: taskStatus === 'completedTask' ? emp.taskCounts.completedTask + 1 : emp.taskCounts.completedTask,
                        failedTask: taskStatus === 'failedTask' ? emp.taskCounts.failedTask + 1 : emp.taskCounts.failedTask
                    }
                }
            }
            return emp;
        });

        localStorage.setItem('employees', JSON.stringify(updatedEmployeeData));

        const updatedLoggedInUserData = {
            ...loggedInUserData,
            userData: updatedEmployeeData.find(emp => emp.id === loggedInUserData.userData.id)
        };
        localStorage.setItem('loggedInUser', JSON.stringify(updatedLoggedInUserData));

        updateEmpData(updatedEmployeeData)
        setUpdatedUserData(updatedLoggedInUserData.userData);
        setFilteredTasks(updatedLoggedInUserData.userData.tasks);

    };

    // FUNCTION TO TOGGLE THE TASK FILTER
    const toggleFilter = (filterType) => {
        if (activeFilter === filterType) {
            setFilteredTasks(updatedUserData.tasks);
            setActiveFilter(null); 
        } else {
            setFilteredTasks(updatedUserData.tasks.filter(task => task[filterType]));
            setActiveFilter(filterType);
        }
    };

    return (
        <>
            <Header userData={updatedUserData} changeUser={changeUser} /> {/* PASS THE UPDATED USERDATA USEFULL WHEN TASK STATUS GETS UPDATED */}
            {/* PASS setFilteredTasks and toggleFilter FOR TASK FILTERING */}
            <TaskListNumber userData={updatedUserData} toggleFilter={toggleFilter} />

            {/* CHECK IF filteredTasks HAS NO TASKS AND DISPLAY THE MESSAGE */}
            {filteredTasks.length === 0 ? (
                <div className="h-80 overflow-x-auto py-5 items-center flex justify-center">
                    <div className="text-center text-3xl text-gray-500"><i>No task available</i></div>
                </div>
            ) : (
                <TaskList
                    tasksData={{ tasks: filteredTasks }}
                    updateTaskStatus={updateTaskStatus}
                />
            )}
        </>
    );
};

export default EmployeeDashboard