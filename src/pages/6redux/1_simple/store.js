import { createStore } from 'redux';

// const actions = {
//     increase: () => ({ type: 'INCREASE' }),
//     decrease: () => ({ type: 'DECREASE' })
// }
// export default actions;

// reducer
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT': return { count: state.count + 1 };
        case 'DECREMENT': return { count: state.count - 1 };
        default: return state;
    }
}
// store
const store = createStore(reducer, { count: 100 });
export default store;
