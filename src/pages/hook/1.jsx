import React, { useRef, FC } from 'react';

interface DemoProps {

}

const Demo: FC= (props) => {

    const inputElement = useRef();

    const handleFocusInput = () => {
        //  @ts-ignore
        inputElement?.current.focus();
        //  @ts-ignore
        console.log(inputElement?.current.value);
    }

    return (
    <div>
        {/* <input ref={inputElement} ></input><br/> */}
        <button onClick={handleFocusInput}>1111</button>
    </div>);
};

export default Demo;