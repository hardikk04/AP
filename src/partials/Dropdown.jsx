import React from "react";

function Dropdown({ title, option, handleCategory }) {
  return (
    <div className="select">
      <select
        onChange={(e) => handleCategory(e.target.value)}
        defaultValue="0"
        name="format"
        id="format"
      >
        <option value="0" disabled>
          {title}
        </option>
        {option.map((t, index) => {
          return <option key={index}>{t.toUpperCase()}</option>;
        })}
      </select>
    </div>
  );
}

export default Dropdown;
