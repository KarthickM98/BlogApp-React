import React, { useContext } from "react";
import { contextData } from "./Context";
import { Link, useParams } from "react-router-dom";

export const LabelToppost = () => {
  const { category } = useParams();
  const [data] = useContext(contextData);
  let count = 0;
  return (
    <div className="toppost">
      <h1>Top Post</h1>
      {data
        .filter((x) =>
          category == undefined
            ? x.id > 19 && x.id < 24
            : x.category == category
        )
        .map((e) => {
          {
            if (e.id == 19) {
              return (
                <Link to={`/${e.category}/${e.id}`} className="link2">
                  <div className="toppost1">
                    <img src={e.image} />
                    <h5>{e.title.slice(0, 32)}</h5>
                    <span className="numspan">{`${(count = count + 1)}`}</span>
                    <p>
                      <b>{e.category}</b> / {e.date}
                    </p>
                  </div>
                  <hr className="hrstl4" />
                </Link>
              );
            } else {
              return (
                <Link to={`/${e.category}/${e.id}`} className="link2">
                  <div className="toppost2">
                    <img src={e.image} />
                    <h5>{e.title.slice(0, 32)}</h5>
                    <span className="numspan2">{`${(count = count + 1)}`}</span>
                    <p>
                      <b>{e.category}</b> / {e.date}
                    </p>
                  </div>
                  <hr className="hrstl4" />
                </Link>
              );
            }
          }
        })}
    </div>
  );
};