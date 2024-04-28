import { useReducer } from "react";
import AddTask from "./addTask.jsx";
import TaskList from "./TaskList.jsx";
import { tasksReducer, initialTasks } from "./reducer.jsx";

// * 参见 http://localhost:3001/senior/7Reducer
// * 官网地址：https://react.docschina.org/learn/extracting-state-logic-into-a-reducer

export default function TaskApp() {
  // * 使用useReducer
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  // * 调用dispatch，传入action
  function handleAddTask(text) {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  return (
    <>
      <h1>布拉格的行程安排</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

let nextId = 3;
