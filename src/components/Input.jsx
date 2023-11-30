
export default function Input({onAddTask}) {
    const handleSubmit = (e) =>{
        
        e.preventDefault()

        const todoForm = new FormData(e.target)
        const description = todoForm.get('description')
        onAddTask(description)
    }

  return (
    <form onSubmit = {handleSubmit}>
        <label htmlFor="decription">Nueva Tarea: </label>
        <input type="text" name='description' id='description' placeholder='Lo que te pinte' required/>
        <input type="submit" value= 'Crear' />

    </form>
  )
}
