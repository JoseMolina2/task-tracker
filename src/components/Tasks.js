import Task from "./Task";

export default function Tasks({ tasks, onDelete, onToggleReminder }) {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggleReminder={onToggleReminder}
        ></Task>
      ))}
    </>
  );
}
