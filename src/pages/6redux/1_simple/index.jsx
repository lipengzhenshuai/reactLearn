import store from "./store";
import { Provider } from "react-redux";
import Counter from "./Counter";
import Counter2 from "./Counter2";

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
        <h1>使用connect连接</h1>
        <Counter />
        <h1>使用useSelector连接</h1>
        <Counter2 />
      </Provider>
    </div>
  );
};

export default A;
