import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { contextData } from "./Context";

export const LabelFooter = () => {
  const [data] = useContext(contextData);
  const [ldbn, setldbn] = useState(true);
  const [btn, setbtn] = useState("down");
  const [btn2, setbtn2] = useState("LOAD MORE");
  const [num, setnum] = useState(27);
  const loadfn = () => {
    setldbn(!ldbn);
    if (ldbn) {
      setnum(30);
      setbtn("up");
      setbtn2("LOAD LESS");
    } else {
      setnum(27);
      setbtn("down");
      setbtn2("LOAD MORE");
    }
  };
  return (
    <div className="labelft">
      <h1 className="hrft">Latest Stories</h1>
      <div className="footlabel">
        {data
          .filter((x) => x.id > 23 && x.id < num)
          .map((x) => {
            return (
              <Link to={`/${x.category}/${x.id}`} className="link2">
                <div className="childft">
                  <h4>{x.title}</h4>
                  <p>{x.content.slice(0, 150)}</p>
                  <p>
                    <b>{x.category}</b> / {x.date}
                  </p>
                </div>
              </Link>
            );
          })}
      </div>
      <b onClick={loadfn}>
        <i className={`fas fa-arrow-${btn}`} />
        &nbsp; {btn2}
      </b>
    </div>
  );
};
