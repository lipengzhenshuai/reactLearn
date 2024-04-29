import store from "./store";
import { Provider } from "react-redux";
import Counter from "./Counter";

/**
 * * 1.引入store
 * * 2.给Counter组件包裹Provider
 * * 3.Counter使用store
 * 
 * * 目前高阶组件的用法很少了，基本都是使用hooks；并且是在老项目里面；
 * 
 */

const A = () => {
  return (
    <div>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
};

export default A;
