import React, { useContext } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { contextData } from "./Context";

export const ShowUser = (props) => {
  return (
    <div className="shousr">
      <img
        src={
          "https://www.pikpng.com/pngl/m/154-1540525_male-user-filled-icon-my-profile-icon-png.png"
        } alt="srcimage here"
      />
      <span>
        <h5>User Name !!!</h5>
        <small>{props.data1} - 10 mins read</small>
      </span>
    </div>
  );
};

export const ShowFooter = () => {
  const [dataOne] = useContext(contextData);
  const { id } = useParams();
  let d1;
  dataOne.forEach((element) => {
    if (element.id === id) d1 = element;
  });
  return (
    <>
      <h5 className="hdsf">More From Siren</h5>
      <hr style={{ width: "79%", marginLeft: "9.4rem" }} />
      <div className="showftr">
        {dataOne
          .filter((x) => x.id !== id && x.author === d1.author)
          .slice(0, 3)
          .map((x) => {
            return (
              <Link to={`/${x.category}/${x.id}`} className="nlink">
                <div className="childshowftr">
                  <h6>Realted reads :</h6>
                  <img src={x.image} className="artimg" alt="srcimage here"/>
                  <img
                    className="userimg"
                    src={
                      "https://www.pikpng.com/pngl/m/154-1540525_male-user-filled-icon-my-profile-icon-png.png"
                    } alt="srcimage here"
                  />
                  <span className="childftrspan">
                    <p>{x.title}</p>
                    <h5>User Name !!!</h5>
                    <small>{x.date} - 10 mins read</small>
                  </span>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
};
