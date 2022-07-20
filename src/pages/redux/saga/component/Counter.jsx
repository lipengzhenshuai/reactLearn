import { useDispatch, useSelector } from 'react-redux';
const Counter = (props) => {

  const count = useSelector(state => state.count)
  const dispatch = useDispatch()

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: "ADD" })}>+</button>
      <button onClick={() => dispatch({ type: "ASYNC_ADD" })}>+</button>
    </div>
  );
};
export default Counter;
