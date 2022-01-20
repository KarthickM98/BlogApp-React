import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { contextData } from "./Context";

export const LabelOne = () => {
  const [data] = useContext(contextData);
  return (
    <>
      <h1 className="headh1">The Latest</h1>
      <div className="lathead">
        {data
          .filter((x) => x.id > 3 && x.id < 7)
          .map((e) => {
            return (
              <Link to={`/${e.category}/${e.id}`} className="link2">
                <div className="latest">
                  <img src={e.image} />
                  <h1>{e.title.slice(0, 32)}</h1>
                  <p>{e.content.slice(0, 120)}</p>
                  <p>
                    <b>{e.category}</b> / {e.date}
                  </p>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
};
