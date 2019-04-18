import React from "react";
import loadinggif from "./loading.gif";

const Spinner = () => {
  return (
    <div>
      <img
        src={loadinggif}
        style={{ margin: "auto", display: "block" }}
        alt="Loading..."
      />
    </div>
  );
};

export default Spinner;
