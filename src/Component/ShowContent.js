import React, { useContext } from "react";
import { useParams } from "react-router";
import { contextData } from "./Context";
import { ShowFooter, ShowUser } from "./ShowHeader";

export const ShowContent = () => {
  const { id } = useParams();
  const { show } = useParams();
  const [data] = useContext(contextData);
  // const [dt,setdt] =useState(); // do not use usestate hooks inside the loops forEach
  let dt1;
  data.forEach((element) => {
    if (element.id == id) {
      dt1 = element;
    }
  });
  return (
    <>
      <div className="contentPage">
        <h1>{show} Article title here!</h1>
        <span className="clapsicon">
          <i className="fa-solid fa-hands-clapping fa-2x" /> {dt1.claps}!!{" "}
          <i class="fa fa-share-alt fa-2x" /> Share
        </span>
        <span className="socil">
          <i class="fab fa-youtube fa-2x" /> <i class="fab fa-facebook fa-2x" />{" "}
          <i class="fab fa-instagram fa-2x" />{" "}
          <i class="fab fa-twitter fa-2x" />
        </span>
        <ShowUser data1={dt1.date} />

        <img src={dt1.image} />
        <p>{dt1.content}</p>
        <p>{dt1.content}</p>
        <img src={dt1.image} />
        <p>{dt1.content}</p>
        <span className="contentspan">
          <i className="fa-solid fa-hands-clapping fa-2x" /> &nbsp;{dt1.claps}!!
          <br />
          <li>React</li>
          <li>Javascript</li>
          <li>Animation</li>
        </span>
        <b>Written by</b>
        <ShowUser data1={dt1.date} />
      </div>
      <ShowFooter data1={dt1.date} />
    </>
  );
};
