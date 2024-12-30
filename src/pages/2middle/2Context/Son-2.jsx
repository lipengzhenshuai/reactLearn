import React from "react";
import { LanguageContext } from "./Parent";
const LocaledButtons = () => {

  const locale = React.useContext(LanguageContext);

  return (
    <div>
      <button>{locale.cancel}</button>
      &nbsp;<button>{locale.submit}</button>
    </div>
  );
};

export default LocaledButtons;
