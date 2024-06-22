import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputvalue, setInputValue] = useState();
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newInputValue = inputvalue.trim();

    if (newInputValue.length === 0) return;

    onNewCategory(newInputValue);
    setInputValue("");
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Buscar gifs"
          value={inputvalue}
          onChange={onInputChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </form>
    </>
  );
};
