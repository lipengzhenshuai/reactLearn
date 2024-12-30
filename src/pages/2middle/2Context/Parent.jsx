import React, { useState } from "react";
import Info from "@/components/Info";
import LocaledButtons from "./Son";
import LocaledButtons2 from "./Son-2";

const enStrings = {
  submit: "Submit",
  cancel: "Cancel",
};

const cnStrings = {
  submit: "提交",
  cancel: "取消",
};
export const LanguageContext = React.createContext(enStrings);


const App = (props) => {
  const [locale, setLocale] = useState(cnStrings);

  const toggleLocale = () => {
    setLocale(locale === enStrings ? cnStrings : enStrings);
  };
  return (
    <LanguageContext.Provider value={locale}>
      <button onClick={toggleLocale}>切换语言</button>
      {props.children}
    </LanguageContext.Provider>
  );
};

export default () => {
  return (
    <div>
      <Info>
        React的Context的用法
        <p>
          1.创建一个context对象<br />
          2.对象.Provider在外边包裹内部的组件，value属性是传给消费者使用的值；<br />
          3.使用对象.Consumer组件消费或者使用React.useContext进行消费就可以获取到里面的值；<br />
        </p>
      </Info>
      <App>
        <div>
          <br />
          <div>son1:</div>
          <LocaledButtons />
          <div>son2:</div>
          <LocaledButtons2 />
        </div>
      </App>
      <LocaledButtons />
    </div>
  );
};
