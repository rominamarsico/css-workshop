import React from "react";

export const Link = ({ link }) => {
  return (
    <a style={{ color: "coral" }} href={link}>
      {link}
    </a>
  );
};

export const Source = ({ link }) => {
  return (
    <a style={{ color: "grey", margin: "1rem" }} href={link}>
      {link}
    </a>
  );
};

export const LinkLiveCoding = ({ link }) => {
  return (
    <a style={{ color: "coral" }} href={link}>
      Live Coding
    </a>
  );
};
