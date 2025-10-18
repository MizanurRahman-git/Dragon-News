import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);
  return (
    <div>
      <h1 className="font-semibold text-[20px]">
        All Categories{categories.length}
      </h1>
      <div  className="grid grid-cols-1">
        {categories.map((data) => (
          <NavLink to={`/category/${data.id}`} key={data.id} className="btn bg-white text-accent font-medium text-[18px] border-none hover:bg-base-200 mt-4">{data.name}</NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
