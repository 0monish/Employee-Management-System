import React from 'react'

const CompleteTask = ({ taskData }) => {
    return (
        <div className="flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 hover:scale-105 text-white rounded-xl">
            <div className='flex justify-between items-center'>
                <h3 className="bg-black px-3 py-1 hover:scale-110 text-sm rounded-md font-semibold">{taskData.taskCategory} </h3>
                <h4 className='font-medium'>{taskData.taskDate}</h4>
            </div>

            <h2 className="text-2xl font-semibold mt-5">{taskData.taskTitle}</h2>
            <p className="text-sm mt-2 max-h-[150px] overflow-y-auto custom-scrollbar pe-1">{taskData.taskDescription}</p>
        </div>
    )
}

export default CompleteTask