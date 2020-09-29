import React from 'react';

const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton">
        {props.children}
    </button>
));
  
// 你可以直接获取 DOM button 的 ref：
const ref = React.createRef();

export default class refs extends React.Component {

    render() {
        return (
            <div>
                <FancyButton ref={ref}>Click me!</FancyButton>
                {console.log(ref)}
            </div>
        )
    }
}