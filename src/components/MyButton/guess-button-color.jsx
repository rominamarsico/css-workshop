import React from "react";
import styled from "@emotion/styled";

const RedButton = styled.button({
  padding: "2rem",
  backgroundColor: "red",
  fontSize: "2rem",
});

export const GuessButtonColor = () => {
  return (
    <RedButton
      style={{ backgroundColor: "pink" }}
      className="blue-button green-button"
      id="yellow-button"
    >
      What color am I?
    </RedButton>
  );
};

export const MyButton = () => {
  return (
    <button
      style={{
        padding: "1rem",
        borderRadius: "5px",
        border: "3px solid #669900",
        backgroundColor: "#669900",
        color: "white",
      }}
    >
      Hier klicken
    </button>
  );
};
