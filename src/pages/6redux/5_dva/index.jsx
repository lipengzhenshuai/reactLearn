const Model = {
  namespace: 'configManage',
  state: {},
  effects: {
      * taskList({payload, callback}, {call, put}) {
          const response = yield call("queryTaskList", payload);
          const {code, data, pager, msg} = response;
          if (code === 0) {
              callback && callback(data, pager);
          }
          else {
          }
      },
      * taskDetail({payload, callback}, {call, put}) {
          const response = yield call("queryTaskDetail", payload);
          const {code, data, msg} = response;
          if (code === 0) {
              callback && callback(data);
          }
          else {
          }
      },
  },

  reducers: {
      updateList(state, {payload}) {
          return {
              ...state,
              ...payload,
          };
      },
  },
};

export default Model;
