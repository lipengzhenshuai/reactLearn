// *reducer 类似与 Redux 中的 reducer，类似redux,是一个纯函数，接收两个参数：state 和 action，返回新的 state。
// *reducer 名字取自 reduce，可以不断处理数据
export function tasksReducer(tasks, action) {
  if (action.type === "added") {
    return [
      ...tasks,
      {
        id: action.id,
        text: action.text,
        done: false,
      },
    ];
  } else if (action.type === "changed") {
    return tasks.map((t) => {
      if (t.id === action.task.id) {
        return action.task;
      } else {
        return t;
      }
    });
  } else if (action.type === "deleted") {
    return tasks.filter((t) => t.id !== action.id);
  } else {
    throw Error("未知 action: " + action.type);
  }
}

// *initialTasks 是一个初始的任务列表，包含了三个任务
export const initialTasks = [
  {id: 0, text: '参观卡夫卡博物馆', done: true},
  {id: 1, text: '看木偶戏', done: false},
  {id: 2, text: '打卡列侬墙', done: false}
];