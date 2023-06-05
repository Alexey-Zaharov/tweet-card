import React from "react";
import PropTypes from "prop-types";
import css from "./Button.module.css";

const Button = ({ onClick, text }) => {
  return (
    <button type="button" className={css.Button} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};

export default Button;
