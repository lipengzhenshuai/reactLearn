import React from "react";
import { Consumer } from "./Parent";
const LocaledButtons = () => {
  return (
    <Consumer>
      {(locale) => (
        <div>
          <button>{locale.cancel}</button>
          &nbsp;<button>{locale.submit}</button>
        </div>
      )}
    </Consumer>
  );
};

export default LocaledButtons;
