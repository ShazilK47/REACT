import React from "react";

function Button({ text, color }) {
  return (
    <>
      <button className={`px-3 py-1 ${color} m-5 text-white rounded`}>
        {text}
      </button>
    </>
  );
}

export default Button;
