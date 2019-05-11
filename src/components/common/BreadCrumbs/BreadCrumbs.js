import React from "react";

const BreadCrumbs = ({ title }) => (
  <ol className="breadcrumb">
    <li className="breadcrumb-item active">{title}</li>
  </ol>
);

export default BreadCrumbs;
