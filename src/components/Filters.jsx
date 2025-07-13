import React, { useState } from "react";

const Filters = (props) => {
  const { handleClick,buttonText } = props;


  

  return (
    <div className="filter-btn">
      <button onClick={handleClick}>{buttonText}</button>
       {/* <button onClick={handleClick2}>All</button> */}
    </div>
  );
};

export default Filters;
