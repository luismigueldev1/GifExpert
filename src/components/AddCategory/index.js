import React, { useState } from "react";
import PropTypes from "prop-types";

function AddCategory({ setCategories }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    const fixedInputValue = inputValue.trim();
    event.preventDefault();
    setCategories((categories) => {
      const isAlreadyExist = categories.find((cat) => cat === fixedInputValue);
      if (!fixedInputValue || isAlreadyExist || fixedInputValue <= 2)
        return [...categories];
      return [fixedInputValue, ...categories];
    });
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="add-category">Search gifs: </label>
      <input
        type="text"
        name="add-category"
        placeholder="Mario bros"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
