import React from "react";
import { CategoryInfo } from "./categoryFullinfo";
import CategoryCard from "./CategoryCard";
import classes from "./Category.module.css";

function Category() {
  return (
    <section className={classes.Category__container}>
      {CategoryInfo.map((infos, index) => (
        <CategoryCard key={infos.id || index} data={infos} />
      ))}
    </section>
  );
}

export default Category;
