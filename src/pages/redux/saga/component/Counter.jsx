import { connect } from "react-redux";
const Counter = (props) => {
  return (
    <div>
      <p>{props.count}</p>
      <button onClick={() => props.dispatch({ type: "ADD" })}>+</button>
      <button onClick={() => props.dispatch({ type: "ASYNC_ADD" })}>+</button>
    </div>
  );
};
export default connect((state) => state)(Counter);
