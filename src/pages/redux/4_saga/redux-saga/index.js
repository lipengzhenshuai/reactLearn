import { stdChannel } from './channel';
import { runSaga } from './runSaga';

/**
 * 
 * 1.创建中间件 sagaMiddlewareFactory()
 * 2.作为中间件被middle-ware中间件执行
 * 3.执行run方法，绑定参数
 */
function sagaMiddlewareFactory() {
  const channel = stdChannel();

  let boundRunSaga;
  function sagaMiddleware({ getState, dispatch }) {
    boundRunSaga = runSaga.bind(null, {
      channel,
      dispatch,
      getState,
    })

    return function (next) {
      return function (action) {
        const result = next(action);
        channel.put(action);
        return result;
      }
    }
  }

  sagaMiddleware.run = (...args) => {
    boundRunSaga(...args)
  }

  return sagaMiddleware;
}

export default sagaMiddlewareFactory;