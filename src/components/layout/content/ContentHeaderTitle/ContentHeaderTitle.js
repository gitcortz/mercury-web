import React from "react";

const ContentHeaderTitle = ({ title, status, statusText }) => (
  <div className="d-flex flex-row align-items-center">
    <h3>{title}</h3>
    <span className={`label label-${status} m-l-10`}>{statusText}</span>
  </div>
);

export default ContentHeaderTitle;
