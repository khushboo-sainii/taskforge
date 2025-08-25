import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({tasks, onDelete}) => {
  const hour = new Date().getHours();
  const greeting =
  hour < 12 ? "Good morning!" :
  hour < 18 ? "Good afternoon!" :
  "Good evening!";
  
  return (
    <div className='flex flex-col w-full mx-auto '>
      {tasks.length > 0 ? (tasks.map((task, index) => (
        <TaskItem key={task._id} task={task} onDelete={() => onDelete(task._id)} />
      ))
      ) : (
         <div className="text-center text-gray-500 mt-4">
            <span className="text-2xl animate-pulse">📭</span>
            <p className="mt-2 text-sm">{greeting} You have no tasks yet. Start by adding one!</p>
          </div>
      )}
    </div>
  )
}

export default TaskList
