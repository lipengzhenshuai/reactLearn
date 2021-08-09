import store from "./store/index";
import { Provider } from "react-redux";
import Counter from "./component/Counter";

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
