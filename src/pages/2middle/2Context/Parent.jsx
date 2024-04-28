import React, { useState } from "react";
import LocaledButtons from "./Son";

const enStrings = {
  submit: "Submit",
  cancel: "Cancel",
};

const cnStrings = {
  submit: "提交",
  cancel: "取消",
};
export const { Provider, Consumer } = React.createContext(enStrings);

const LocaleProvider = (props) => {
  const [locale, setLocale] = useState(cnStrings);

  const toggleLocale = () => {
    setLocale(locale === enStrings ? cnStrings : enStrings);
  };
  return (
    <Provider value={locale}>
      <button onClick={toggleLocale}>切换语言</button>
      {props.children}
    </Provider>
  );
};

export default () => {
  return (
    <div>
      <LocaleProvider>
        <div>
          <br />
          <LocaledButtons />
        </div>
      </LocaleProvider>
      <LocaledButtons />
    </div>
  );
};
