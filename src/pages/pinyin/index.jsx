import store from "./store/index.js";
import { Provider } from "react-redux";
import Content from "./components/content";

const PinYin = (props) => {

  return (
    <Provider store={store}>
      <Content />
    </Provider>
  );
};

export default PinYin;
