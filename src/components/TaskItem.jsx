import React from 'react'

const TaskItem = ({task,onDelete}) => {
  return (
    <div className='flex w-full relative mx-auto flex-row justify-between items-center border gap-2 mt-4 py-2 px-1  rounded-md border-gray-800'>
      <input type='text' value={task.text} readOnly placeholder='First task...' className='text-lg px-1 font-medium text-gray-700  my-1 outline-none border-none bg-transparent'/>
      <button onClick={onDelete} className='bg-red-500 right-1 absolute font-medium text-white text-lg rounded-md px-4 py-1 my-2 shadow-sm cursor-pointer hover:scale-105 hover:bg-red-600 transition-transform duration-200'>Delete</button>
    </div>
  )
}

export default TaskItem
