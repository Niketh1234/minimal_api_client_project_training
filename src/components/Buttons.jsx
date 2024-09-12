import React, { useState } from "react";
import ShowData from "./ShowData";

const Buttons = () => {
  const showData = () => {
    fetch("http://localhost:5162/")
      .then((response) => {
        return response;
      })
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <button onClick={showData}>My button</button>
    </div>
  );
};

export default Buttons;
