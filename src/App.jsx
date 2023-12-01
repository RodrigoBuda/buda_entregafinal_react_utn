import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import TaskList from './components/TaskList'


export default function App() {
  const [tasks, setTasks] = useState([])
  //funcion para agregar nueva tarea, recibe la descripcion que viene
  //del evento que se dispara cuando le damos "crear" en el componente Input
  const handleAddTask = (description) => {
    const newTask = {
      id: self.crypto.randomUUID(),
      description: description,
      isCompleted: false
    }
    setTasks ([...tasks, newTask])
    }
    
    const handleDelete = (id) => {
      const remainingTasks = tasks.filter((t) => t.id !== id);
      setTasks([...remainingTasks])
    }
  
    const handleChangeStatus= (id)=>{
        const modifiedTasks = tasks.map(t => 
          t.id === id ?
          {...t,isCompleted: !t.isCompleted}
          :
          t)
          setTasks([...modifiedTasks])
    }
  return (
    <>
    <h1>Lista de Tareas</h1>
    <Input onAddTask = {(description) => handleAddTask(description)} />
    <TaskList onDeleteTask ={(id) => handleDelete(id)} tasks = {tasks} onChangeStatus={handleChangeStatus}/> 
    </>
    )


}


