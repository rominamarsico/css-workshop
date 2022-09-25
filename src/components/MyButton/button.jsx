import React from 'react';
import "./button.css";

export const ButtonPrimary = ({label}) => {
  return <button className="button-primary">{label}</button>
}

export const ButtonSecondary = ({label}) => {
  return <button className="button-secondary">{label}</button>
}