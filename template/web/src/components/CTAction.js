import React from "react";
import { Link } from "gatsby";

const CTAction = ({ kind, title, link }) => (
    {kind === "button" && (
      <button className="">
        {title}
      </button>
    )}
    {kind === "link" && <Link to={link}>{title}</Link>}
);

export default CTAction;
