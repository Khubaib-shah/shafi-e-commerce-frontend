import React from "react";

const Button = ({ type, title }) => {
  return (
    <button
      type={type}
      className="bg-red-500 hover:bg-[--bg-color]  text-white px-4 py-2 rounded"
    >
      {title}
    </button>
  );
};

export default Button;
