export default function TaskList({ tasks, onDeleteTask, onChangeStatus }) {
  const msg = (tetxt) => alert(text);

  return (
    <div className="cont-taskList">
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            <div className="cont-id-tarea">
              {t.id.slice(0, 4)} ❗ {t.description} ➡️
            </div>

            <div className="btns-hecho-pend">
              <div className="hecho-pendiente">
                {t.isCompleted ? "Hecho 🫡" : "Pendiente 😴"}
              </div>
              <button
                className="btn btn-terminado"
                onClick={() => onChangeStatus(t.id)}
              >
                ✔️
              </button>
              <button
                className="btn btn-borrar"
                onClick={() => onDeleteTask(t.id)}
              >
                ✖️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
