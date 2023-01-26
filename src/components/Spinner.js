import React from "react";
import lol from "./lol.gif";

const Spinner = () => {
  return (
    <div className="text-center my-3">
      <img src={lol} alt="loading" />
    </div>
  );
};

export default Spinner;
