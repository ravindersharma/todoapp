import useTasks from "../hooks/useTasks";

const TaskCard = ({ task }) => {
  const { updateTaskFn, deleteTaskFn } = useTasks();

  return (
    <div className="p-4 bg-white rounded shadow flex justify-between items-center">
      <div>
        <h3 className="font-medium">{task.title}</h3>
        <p className="text-sm text-gray-500">{task.description}</p>
      </div>

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() =>
            updateTaskFn(task._id, { completed: !task.completed })
          }
        />

        <button
          onClick={() => deleteTaskFn(task._id)}
          className="text-red-600 hover:underline text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
