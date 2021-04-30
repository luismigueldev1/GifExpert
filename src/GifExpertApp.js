import React, { useState } from "react";
import PropTypes from "prop-types";

import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

function GifExpertApp({ defaultCategories = [] }) {
  const [categories, setCategories] = useState(defaultCategories);
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

GifExpertApp.propTypes = {
  defaultCategories: PropTypes.array,
};

export default GifExpertApp;
