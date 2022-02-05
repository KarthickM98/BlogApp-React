import React, { useContext } from "react";
import { contextData } from "./Context";
import { Link } from "react-router-dom";
import "./blogStyles.css";

export const TopFeaterudArts = () => {
  const [data] = useContext(contextData);
  const data1 = [];
  const data2 = [];
  data.forEach((k) => {
    switch (k.id) {
      case "1":
        data1.push(data[k.id - 1]);
        break;
      case "2":
        data2.push(data[k.id - 1]);
        break;
      case "3":
        data2.push(data[k.id - 1]);
        break;
      default:
        break;
    }
  });
  return (
    <div className="parentTfa">
      {data1.map((a) => (
        <Link to={`/${a.category}/${a.id}`}>
          <div className="Topfetrd">
            <img src={a.image} alt="srcimage here"/>
            <p>
              <b>{a.title}</b>
              <br />
              {a.category} / {a.date}
            </p>
          </div>
        </Link>
      ))}
      <div className="sidePnt">
        {data2.map((a) => (
          <Link to={`/${a.category}/${a.id}`}>
            <div className="sideBox">
              <img src={a.image} alt="srcimage here"/>
              <p>
                <b>{a.title}</b>
                <br />
                {a.category} / {a.date}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
