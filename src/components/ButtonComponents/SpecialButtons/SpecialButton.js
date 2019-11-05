import React from "react";

const SpecialButton = (props) => {
  const {special} = props
  return (
    <button>
      { special }
    </button>
  );
};

export { SpecialButton };