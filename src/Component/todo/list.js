import React from "react";
// functional component

const List = ({ title, children }) => (
  <div style={{ padding: "10px" }}>
    <i>{title}</i>
    {children}
  </div>
);

export default List;
