import React, { useState } from "react";

function TaskList({ tasks, onDeleteTask, onChangeTask }) {
  const [editId, setEditId] = useState({ id: null, text: "" });

  const handleEdit = (task) => {
    setEditId({
      id: task.id,
      text: task.text,
    });
  };

  const handleInputChange = (event) => {
    setEditId({
      ...editId,
      text: event.target.value,
    });
  };

  const handleUpdate = (taskId) => {
    onChangeTask({
      id: taskId,
      text: editId.text,
    });
    setEditId({ id: null, text: "" });
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.id === editId.id ? (
            <input
              type="text"
              value={editId.text}
              onChange={handleInputChange}
            />
          ) : (
            <span>{task.text}</span>
          )}
          {task.id === editId.id ? (
            <button onClick={() => handleUpdate(task.id)}>保存</button>
          ) : (
            <>
              <button onClick={() => handleEdit(task)}>编辑</button>
              <button onClick={() => onDeleteTask(task.id)}>删除</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
