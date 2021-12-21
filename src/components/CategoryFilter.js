import React from "react";

function CategoryFilter( {categories, handleSelected, selected } ) {


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button key={Math.random()} className={ selected === category ? 'selected' : '' } onClick={handleSelected} value={category}> {category} </button>
      ))} 
    </div>
  );
}

export default CategoryFilter;
