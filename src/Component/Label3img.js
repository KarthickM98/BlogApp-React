import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { contextData } from "./Context";

export const Label3img = () => {
  const [data] = useContext(contextData);
  const last = data[data.length - 1];
  return (
    <div className="label3">
      <Link to={`/${last.category}/${last.id}`} className="link2">
        <p>
          <h1>{last.title}</h1>
          <br />
          <span>
            <b>{last.category}</b> / {last.date}
          </span>
        </p>
        <img src={last.image} alt="srcimage here"/>
      </Link>
    </div>
  );
};
