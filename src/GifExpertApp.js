import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export default function GifExpertApp() {
  const [categories, setCategories] = useState(["YuGiOh!"]);
  // const handleAddToCategories = () => {
  //   //setCategories([...categories, "YuGiOh!"]);
  //   setCategories((categories) => [...categories, "YuGiOh!"]);
  // };

  return (
    <>
      <h2>GifExpert</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <div key={category}>
            <GifGrid category={category} />
          </div>
        ))}
      </ol>
    </>
  );
}
