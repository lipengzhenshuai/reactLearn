import store from "./store";
import { Provider } from "react-redux";
import Counter from "./Counter";

/**
 * * 1.引入store
 * * 2.给Counter组件包裹Provider
 * * 3.Counter使用store
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
