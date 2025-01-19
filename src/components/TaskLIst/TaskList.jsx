import React from 'react';
import ActiveTask from './ActiveTask';
import FailedTask from './FailedTask';
import CompleteTask from './CompleteTask';
import NewTask from './NewTask';


const TaskList = ({ tasksData, updateTaskStatus }) => {
  return (
    <div id="tasklist" className="h-80 overflow-x-auto py-5 items-center flex justify-start gap-5 flex-nowrap mx-5 mt-10 custom-scrollbar">
      {tasksData.tasks.map((task, idx) => {
        if (task.activeTask) {
          return <ActiveTask key={idx} taskData={task} updateTaskStatus={updateTaskStatus} />;
        }
        if (task.newTask) {
          return <NewTask key={idx} taskData={task} updateTaskStatus={updateTaskStatus} />;
        }
        if (task.completedTask) {
          return <CompleteTask key={idx} taskData={task} />;
        }
        if (task.failedTask) {
          return <FailedTask key={idx} taskData={task} />;
        }
      })}
    </div>
  );
};

export default TaskList