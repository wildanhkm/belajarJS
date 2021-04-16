import React from "react";
import propTypes from "prop-types";

export default function Button(props) {
  const className = ["rounded"];
  if (props.isPrimary) className.push("border-white, bg-white");
  if (props.isSecondary) className.push("border-black, bg-transparent");
  if (props.isLink) className.push("text-blue-500");
  return <button className={className.join(" ")}>{props.children}</button>;
}

Button.propTypes = {
  isPrimary: propTypes.bool,
  isSecondary: propTypes.bool,
  isLink: propTypes.bool,
};
