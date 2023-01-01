import React from "react";
import "./Basic.css";
import classnames from "classnames";

const BasicWithClassnames = (props) => {
  const { success, alert, normal } = props;
  return (
    <div
      className={classnames("container", {
        success: success,
        alert: alert,
        normal: normal
      })}
    >
      Hello
    </div>
  );
};

export default BasicWithClassnames;
