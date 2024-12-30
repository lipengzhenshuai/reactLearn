import React from "react";
import { LanguageContext } from "./Parent";
const LocaledButtons = () => {
  return (
    <LanguageContext.Consumer>
      {(locale) => (
        <div>
          <button>{locale.cancel}</button>
          &nbsp;<button>{locale.submit}</button>
        </div>
      )}
    </LanguageContext.Consumer>
  );
};

export default LocaledButtons;
