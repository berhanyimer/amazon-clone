import React from "react";
import { categoryInfo } from "./categoryFullInfos";
import CategoryCard from "./CategoryCard";

function Category() {
  return (
    <>
      <section>
        {categoryInfo.map((infos) => {
          <CategoryCard data={infos} />;
        })}
      </section>
    </>
  );
}

export default Category;
