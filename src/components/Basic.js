import React from "react";
import "./Basic.css";

const Basic = (props) => {
  const { success, alert, normal } = props;
  return (
    <div
      className={`container ${success ? "success" : null} ${
        alert ? "alert" : null
      } ${normal ? "normal" : null}`}
    >
      Hello
    </div>
  );
};

export default Basic;
