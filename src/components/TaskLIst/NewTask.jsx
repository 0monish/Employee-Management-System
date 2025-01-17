import React from 'react'

const NewTask = ({ taskData }) => {
    

    const employeeData = JSON.parse(localStorage.getItem('employeeData'));
    const loggedInUserData = JSON.parse(localStorage.getItem('loggedInUser'));

    return (
        <div className="flex-shrink-0 h-full w-[300px] p-5 bg-orange-400 hover:scale-105 text-white rounded-xl">
            <div className='flex justify-between items-center'>
                <h3 className="bg-black px-3 py-1 text-sm hover:scale-110 rounded-md font-semibold">{taskData.taskCategory} </h3>
                <h4 className='font-medium'>{taskData.taskDate}</h4>
            </div>

            <h2 className="text-2xl font-semibold mt-5">{taskData.taskTitle}</h2>
            <p className="text-sm mt-2 max-h-[105px] overflow-y-auto custom-scrollbar pe-1">{taskData.taskDescription}</p>
            <div className="flex justify-center">
                <button className="bg-green-400 font-medium active:scale-95 hover:scale-105 text-black px-3 py-1 rounded-md mt-5">Accept</button>
            </div>
        </div>
    )
}

export default NewTask