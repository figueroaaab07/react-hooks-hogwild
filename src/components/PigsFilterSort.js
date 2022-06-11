import React from "react";

function PigsFilterSort({arrangeOptions, activeButton, onClickHandler}) {
  const arrangesDisplay = arrangeOptions.map(arrangeOption => <button key={arrangeOption} className={activeButton===arrangeOption ? "selected" : ""} onClick={onClickHandler}>{arrangeOption} </button>);
  return (
    <div className="filterWrapper">
      <h5>Filter and Sort Options</h5>
      {arrangesDisplay}
    </div>
  );
}

export default PigsFilterSort;