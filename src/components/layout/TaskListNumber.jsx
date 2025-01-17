import React from 'react';

const TaskListNumber = ({ userData, toggleFilter }) => {
    return (
        <div className="flex mt-10 mx-5 justify-between gap-5 screen">
            <div
                className="p-8 w-[45%] bg-orange-400 rounded-xl hover:scale-105 active:scale-100 hover:cursor-pointer"
                onClick={() => toggleFilter('newTask')}
            >
                <h2 className="text-3xl font-bold text-white">{userData.taskCounts.newTask}</h2>
                <h3 className="text-xl font-medium text-white">New Task</h3>
            </div>

            <div
                className="p-8 w-[45%] bg-green-400 rounded-xl hover:scale-105 active:scale-100 hover:cursor-pointer"
                onClick={() => toggleFilter('activeTask')}
            >
                <h2 className="text-3xl font-bold text-white">{userData.taskCounts.activeTask}</h2>
                <h3 className="text-xl font-medium text-white">Active Task</h3>
            </div>

            <div
                className="p-8 w-[45%] bg-blue-400 rounded-xl hover:scale-105 active:scale-100 hover:cursor-pointer"
                onClick={() => toggleFilter('completedTask')}
            >
                <h2 className="text-3xl font-bold text-white">{userData.taskCounts.completedTask}</h2>
                <h3 className="text-xl font-medium text-white">Complete Task</h3>
            </div>

            <div
                className="p-8 w-[45%] bg-red-400 rounded-xl hover:scale-105 active:scale-100 hover:cursor-pointer"
                onClick={() => toggleFilter('failedTask')}
            >
                <h2 className="text-3xl font-bold text-white">{userData.taskCounts.failedTask}</h2>
                <h3 className="text-xl font-medium text-white">Failed Task</h3>
            </div>
        </div>
    );
};

export default TaskListNumber;