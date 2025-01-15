import React, { useContext, useState } from 'react'
// import { AuthContext } from '../../context/AuthProvider'
const CreateTask = () => {

    // const [userData, setUserData] = useContext(AuthContext)



    const [formData, setFormData] = useState({
        taskTitle: '',
        taskDate: '',
        asignTo: '',
        category: '',
        taskDescription: ''
    })

    const handleChanges = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }


    // const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        // setNewTask({ formData.taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })

        // const data = userData

        // data.forEach(function (elem) {
        //     if (asignTo == elem.firstName) {
        //         elem.tasks.push(newTask)
        //         elem.taskCounts.newTask = elem.taskCounts.newTask + 1
        //     }
        // })
        // setUserData(data)
        console.log(formData);

        setFormData({
            taskTitle: '',
            taskDate: '',
            asignTo: '',
            category: '',
            taskDescription: ''
        })

    }


    return (
        <div className='p-5 mx-5 bg-[#1c1c1c] mt-10 rounded'>
            <form onSubmit={submitHandler}
                className='flex flex-wrap w-full items-start justify-between'
            >
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input
                            value={formData.taskTitle}
                            name="taskTitle"
                            onChange={handleChanges}
                            className='text-sm py-1 px-2 w-4/5 text-white rounded-full outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design'
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input
                            value={formData.taskDate}
                            name="taskDate"
                            onChange={handleChanges}
                            className='text-sm py-1 px-2 w-4/5 text-white rounded-full outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="date" />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
                        <input
                            value={formData.asignTo}
                            name="asignTo"
                            onChange={handleChanges}
                            className='text-sm py-1 px-2 w-4/5 text-white rounded-full outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="text"
                            list='employee'
                            placeholder='Employee name' />

                        <datalist id='employee'>
                            <option value="Monish"></option>
                            <option value="Ravi"></option>
                            <option value="Rajveer"></option>
                            <option value="Ravina"></option>

                            {/* {userData.map(function (elem, idx) {
                                return <option key={idx} value={elem.firstName} />
                            })} */}
                        </datalist>
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input
                            value={formData.category}
                            name="category"
                            onChange={handleChanges}
                            className='text-sm py-1 px-2 w-4/5 text-white rounded-full outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Dev, Design, Editing etc' />
                    </div>
                </div>

                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea value={formData.taskDescription}
                        name="taskDescription"
                        onChange={handleChanges} className='w-full h-44 text-sm py-2 px-4 text-white rounded-2xl outline-none bg-transparent border-[1px] border-gray-400'></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 rounded-br-3xl rounded-tl-3xl rounded-bl-none px-5 rounded text-semibold mt-4 w-full'>Create Task</button>
                </div>

            </form>
        </div>
    )
}

export default CreateTask