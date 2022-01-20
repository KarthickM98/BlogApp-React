import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { contextData } from "./Context";

export const LabelTwo = () => {
  const { category } = useParams();
  const [data] = useContext(contextData);
  const [load, setLoad] = useState(true);
  const [st, setst] = useState(15);
  const [ldbn, setlbdn] = useState("LOAD MORE");
  const [btn, setbtn] = useState("down");
  const loadbtn = () => {
    setLoad(!load); //seting toggle!!
    if (load) {
      setst(19);
      setlbdn("LOAD LESS");
      setbtn("up");
    } else {
      setst(15);
      setlbdn("LOAD MORE");
      setbtn("down");
    }
  };

  return (
    <div className="label2parent">
      {data
        .filter((x) =>
          category === undefined ? x.id > 7 && x.id < st : x.category === category
        )
        .map((x) => {
          if (x.id === 8) {
            return (
              <Link to={`/${x.category}/${x.id}`} className="link2">
                <div className="childl2">
                  <img src={x.image} height={"180px"} alt="srcimage here"/>
                  <span className="textl2">
                    <h4>{x.title}</h4>
                    <p>{x.content.slice(0, 100)}</p>
                    <p>
                      <b>{x.category}</b> / {x.date}
                    </p>
                    <hr className="hrstl2" />
                  </span>
                </div>
              </Link>
            );
          } else {
            return (
              <Link to={`/${x.category}/${x.id}`} className="link2">
                <div className="childl2">
                  <img src={x.image} alt="srcimage here"/>
                  <span>
                    <h4>{x.title}</h4>
                    <p>{x.content.slice(0, 100)}</p>
                    <p>
                      <b>{x.category}</b> / {x.date}
                    </p>
                    <hr className="hrstl2" />
                  </span>
                </div>
              </Link>
            );
          }
        })}
      <b onClick={loadbtn}>
        <i className={`fas fa-arrow-${btn}`} /> &nbsp; {ldbn}
      </b>
    </div>
  );
};
