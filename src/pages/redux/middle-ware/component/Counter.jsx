import { useDispatch, useSelector } from 'react-redux';
const Counter = (props) => {

  const count = useSelector(state => state.count)
  const dispatch = useDispatch()

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: "INCREASE" })}>+</button>
    </div>
  );
};
export default Counter;
