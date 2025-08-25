import React, {useState} from 'react'
import AddTask from './AddTask'
import TaskList from './TaskList'
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';


const Home = () => {

  const [tasks,setTasks] = useState([])
  const [loading, setLoading] = useState(true);

  const API = process.env.REACT_APP_API_BASE;
  useEffect(() => {
    setLoading(true);
    axios.get(`${API}/tasks`)
    .then(res => setTasks(res.data))
    .catch(err => console.error('Error fetching tasks:', err))
    .finally(() => setLoading(false));
  }, [API]);


  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  }

  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_BASE}/tasks/${taskId}`);
      setTasks(prev => prev.filter(task => task._id !== taskId));
      toast.success('Task deleted successfully!');
    } catch (err) {
    console.error('Error deleting task:', err);
    toast.error('Failed to delete task!');
    }
  };
  
  return (
    <div className='flex flex-col justify-center items-center pt-4 px-4 pb-8 bg-white/80 backdrop-blur-sm  rounded-2xl shadow-xl hover:shadow-2xl'>
      <h1 className="text-3xl font-semibold text-black ">TaskForge</h1>
      <p className="text-sm text-gray-500 mt-1 mb-8">Your personal task tracker</p>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <AddTask onAdd={handleAddTask} />
          <TaskList tasks={tasks} onDelete={handleDeleteTask} />
        </>
      )}
    </div>
  )
}

export default Home
