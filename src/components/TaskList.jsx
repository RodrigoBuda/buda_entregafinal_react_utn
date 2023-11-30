export default function TaskList({ tasks, onDeleteTask}) {

  return (
    <div>
      <ul>
        {tasks.map((t) => (
          <li>
            {" "}
            {t.id.slice(0, 4)} - {t.description} -{" "}
            {t.isCompleted ? "terminado" : "pendiente"}{" "}
            <button  onClick={() => onDeleteTask(t.id)}>Borrar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
