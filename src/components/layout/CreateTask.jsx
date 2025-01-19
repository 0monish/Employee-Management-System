import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const { userData, updateEmpData } = useContext(AuthContext);

    const [empData, setEmpData] = useState(userData.employees)


    const [formData, setFormData] = useState({
        taskTitle: '',
        taskDate: '',
        assignTo: '',
        category: '',
        taskDescription: ''
    })

    const [error, setError] = useState({
        taskTitleError: "",
        dateError: "",
        assignToError: "",
        categoryError: "",
        descError: ""
    });

    const handleChanges = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

        switch (e.target.name) {
            case "taskTitle":
            case "assignTo":
            case "category":
                validateCommonField(e.target.value, e.target.name);
                break;
            case "taskDate":
                validateTaskDate(e.target.value);
                break;
            case "taskDescription":
                validateTaskDescription(e.target.value);
                break;
            default:
                break;
        }
    };

    const validateCommonField = (value, fieldName) => {
        const commonRegex = /^[a-zA-Z\s]{3,25}$/;
        const errorMsg = "Min. 3 and Max. 25 alphabet characters.";
        if (!commonRegex.test(value)) {
            setError({ [`${fieldName}Error`]: errorMsg });
        } else {
            setError("");
        }
    };

    const validateTaskDate = (taskDate) => {
        const selectedDate = new Date(taskDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate > today) {
            setError({ dateError: "Only present or past dates are allowed." });
        } else {
            setError("");
        }
    };

    const validateTaskDescription = (taskDescription) => {
        const descRegex = /^[a-zA-Z0-9 .,]{10,60}$/;
        if (!descRegex.test(taskDescription)) {
            setError({ descError: "Only 10-60 alphabets, digits, full stops, space and commas are allowed." });
        } else {
            setError("");
        }
    };

    const isFormValid =
        !error.taskTitleError &&
        !error.dateError &&
        !error.assignToError &&
        !error.categoryError &&
        !error.descError &&
        formData.taskTitle &&
        formData.taskDate &&
        formData.assignTo &&
        formData.category &&
        formData.taskDescription


    const submitHandler = (e) => {
        e.preventDefault();

        const updatedEmpData = empData.map((emp) => {
            if (formData.assignTo === emp.firstName) {
                // Determine the next ID based on the existing tasks
                const nextId = emp.tasks.length > 0
                    ? Math.max(...emp.tasks.map((task) => task.id)) + 1
                    : 1; // START FROM 1 IF NO TASKS EXIST


                const newTask = {
                    id: nextId,
                    taskTitle: formData.taskTitle,
                    taskDescription: formData.taskDescription,
                    taskDate: formData.taskDate,
                    taskCategory: formData.category,
                    activeTask: false,
                    newTask: true,
                    failedTask: false,
                    completedTask: false,
                };

                return {
                    ...emp,
                    tasks: [...emp.tasks, newTask],
                    taskCounts: {
                        ...emp.taskCounts,
                        newTask: emp.taskCounts.newTask + 1,
                    },
                };
            }
            return emp;
        });

        updateEmpData(updatedEmpData)

        setFormData({
            taskTitle: '',
            taskDate: '',
            assignTo: '',
            category: '',
            taskDescription: '',
        })
    }

    return (
        <div className='p-5 mx-5 bg-[#1c1c1c] mt-10 rounded'>
            <form onSubmit={submitHandler}
                className='flex flex-wrap w-full items-start justify-between'
            >
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title   {error.taskTitleError && (
                            <p className="text-red-500 mt-2 text-sm">{error.taskTitleError}</p>
                        )}</h3>
                        <input
                            value={formData.taskTitle}
                            name="taskTitle"
                            onChange={handleChanges}
                            maxLength={25}
                            className='text-sm py-1 px-2 w-4/5 text-white rounded-full outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design'
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date {error.dateError && (
                            <p className="text-red-500 mt-2 text-sm">{error.dateError}</p>)}</h3>
                        <input
                            value={formData.taskDate}
                            name="taskDate"
                            onChange={handleChanges}
                            className='text-sm py-1 px-2 w-4/5 text-white rounded-full outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="date" />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign to {error.assignToError && (
                            <p className="text-red-500 mt-2 text-sm">{error.assignToError}</p>)}</h3>
                        <input
                            value={formData.assignTo}
                            name="assignTo"
                            onChange={handleChanges}
                            className='text-sm py-1 px-2 w-4/5 text-white rounded-full outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="text"
                            maxLength={25}
                            list='employee'
                            placeholder='Employee name' />

                        <datalist id='employee'>
                            {empData.map(function (emp, idx) {
                                return <option key={idx} value={emp.firstName} />
                            })}
                        </datalist>
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category {error.categoryError && (
                            <p className="text-red-500 mt-2 text-sm">{error.categoryError}</p>)}</h3>
                        <input
                            value={formData.category}
                            name="category"
                            maxLength={25}
                            onChange={handleChanges}
                            className='text-sm py-1 px-2 w-4/5 text-white rounded-full outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Dev, Design, Editing etc' />
                    </div>
                </div>

                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description  {error.descError && (
                        <p className="text-red-500 mt-2 text-sm">{error.descError}</p>)}</h3>
                    <textarea value={formData.taskDescription}
                        name="taskDescription"
                        maxLength={60}
                        onChange={handleChanges} className='w-full h-44 text-sm py-2 px-4 text-white rounded-2xl outline-none bg-transparent border-[1px] border-gray-400'></textarea>
                    <button disabled={!isFormValid} className={`bg-emerald-500 py-3 hover:bg-emerald-600 rounded-br-3xl rounded-tl-3xl rounded-bl-none px-5 rounded text-semibold mt-4 w-full ${!isFormValid ? 'opacity-50 cursor-not-allowed' : 'active:scale-95'
                        }`}>Create Task</button>
                </div>

            </form>
        </div>
    )
}

export default CreateTask