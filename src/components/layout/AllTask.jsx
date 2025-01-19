import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const { userData, updatedEmpData } = useContext(AuthContext)


  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 mx-5">
      <div className="overflow-x-auto rounded-lg border border-emerald-500">
        <table className="table-auto w-full border overflow-hidden rounded-lg">

          <thead>
            <tr className="bg-red-400 text-center text-lg font-medium text-white">
              <th className="py-2 px-4 border border-emerald-500">Employee Name</th>
              <th className="py-2 px-4 border border-emerald-500">New Task</th>
              <th className="py-2 px-4 border border-emerald-500">Active Task</th>
              <th className="py-2 px-4 border border-emerald-500">Completed Task</th>
              <th className="py-2 px-4 border border-emerald-500">Failed Task</th>
            </tr>
          </thead>

          <tbody>
            {userData.employees.map((elem, idx) => (
              <tr key={idx} className="text-lg text-center text-white">
                <td className="py-2 px-4 border border-emerald-500">{elem.firstName}</td>
                <td className="py-2 px-4 border border-emerald-500 text-orange-400">{elem.taskCounts.newTask}</td>
                <td className="py-2 px-4 border border-emerald-500 text-green-400">{elem.taskCounts.activeTask}</td>
                <td className="py-2 px-4 border border-emerald-500 text-blue-400">{elem.taskCounts.completedTask}</td>
                <td className="py-2 px-4 border border-emerald-500 text-red-400">{elem.taskCounts.failedTask}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default AllTask