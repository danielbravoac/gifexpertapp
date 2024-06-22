import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };
  return (
    <div className="space-y-5">
      <h1 className="text-6xl text-center text-blue-500 font-bold">
        GifExpertApp
      </h1>
      <AddCategory onNewCategory={onAddCategory} />
      {categories.map((category) => (
        <GifGrid category={category} key={category} />
      ))}
    </div>
  );
};
