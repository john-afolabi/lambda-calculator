import React from "react";

const SpecialButton = (props) => {
  const {special} = props
  return (
    <button className="specials">
      { special }
    </button>
  );
};

export { SpecialButton };