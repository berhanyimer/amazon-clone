import React from "react";

function CategoryCard({ data }) {
  return (
    <div className={classes.category-list}>
      <a href="">
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt="" />
        <p>shop now</p>
      </a>
    </div>
  );
}

export default CategoryCard;
