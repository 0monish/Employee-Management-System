import React from 'react'

const TaskListNumber = ({userData}) => {
    return (
        <>
            <div className="flex mt-10 mx-5 justify-between gap-5 screen">
                <div className="p-8 w-[45%] bg-red-400 rounded-xl ">
                    <h2 className="text-3xl font-bold text-white">6</h2>
                    <h3 className="text-xl font-medium text-white">New Task</h3>
                </div>

                <div className="p-8 w-[45%] bg-blue-400 rounded-xl ">
                    <h2 className="text-3xl font-bold text-white">6</h2>
                    <h3 className="text-xl font-medium text-white">New Task</h3>
                </div>

                <div className="p-8 w-[45%] bg-green-400 rounded-xl ">
                    <h2 className="text-3xl font-bold text-white">6</h2>
                    <h3 className="text-xl font-medium text-white">New Task</h3>
                </div>
                
                <div className="p-8 w-[45%] bg-orange-400 rounded-xl ">
                    <h2 className="text-3xl font-bold text-white">6</h2>
                    <h3 className="text-xl font-medium text-white">New Task</h3>
                </div>
            </div>
        </>
    )
}

export default TaskListNumber