export default function TaskList({ tasks, onDeleteTask, onChangeStatus}) {

const msg = (tetxt) =>alert(text)
    

  return (
    <div>
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            
            {t.id.slice(0, 4)} - {t.description} -
            {t.isCompleted ? "terminado" : "pendiente"}
            <button className="btn btn-borrar"  onClick={() => onDeleteTask(t.id)}>✖️</button>
            <button className="btn btn-terminado" onClick={()=>onChangeStatus(t.id)}>✔️</button>
           
          </li>
        ))}
      </ul>
    </div>
  );
}
