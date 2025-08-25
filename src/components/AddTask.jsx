import React, {useState} from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast';

const AddTask = ({onAdd}) => {
  const [taskText, setTaskText] = useState('')

  const handleAdd = async() => {
     if (taskText.trim() === '') {
      toast.error('Please enter a task before adding!');
      return;
    }

    try {
      const API = process.env.REACT_APP_API_BASE;
      const res = await axios.post(`${API}/tasks`, {
      text: taskText
      });
      
      if (onAdd)
        toast.success('Task added successfully!');
        onAdd(res.data);
       setTaskText('')
    }
    catch(error) {
      console.error('Error adding task:', error);
      toast.error('Failed to add task. Check backend connection.');
    }
  }

  return (
    <div className='flex flex-row justify-between items-center border gap-2 mt-4 py-2 px-1 rounded-md border-gray-800'>
      <input type='text' onChange={(e) => setTaskText(e.target.value)} value={taskText} placeholder='Enter task..' 
        className='text-lg font-medium text-gray-700 outline-none border-none bg-transparent'
      />
      <button
       onClick={handleAdd}
       className='bg-blue-500 font-medium text-white rounded-md  text-lg px-4 py-1 cursor-pointer shadow-sm
        hover:bg-blue-600 hover:scale-105 transition-transform duration-200'>
        Add
      </button>
    </div>
  )
}

export default AddTask
