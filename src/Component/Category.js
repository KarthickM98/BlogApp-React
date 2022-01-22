import React,{useEffect} from "react";
import { useParams } from "react-router";
import { LabelTwo } from "./LabelTwo";
import { Label3img } from "./Label3img";
import { Advertise } from "./Advertise";
import { LabelToppost } from "./LabelToppost";

export const Bollywood = () => {
  const { category } = useParams();
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  return (
    <>
      <h1 className="label2">{category}</h1>
      <hr className="hrstl3" />
      <div className="bodyc1">
        <div className="body1">
          <LabelTwo />
          <Label3img />
        </div>
        <div>
          <LabelToppost />
          <Advertise />
        </div>
      </div>
    </>
  );
};
