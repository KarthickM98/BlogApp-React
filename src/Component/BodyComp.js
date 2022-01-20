import React from "react";
import { Advertise } from "./Advertise";
import { Label3img } from "./Label3img";
import { LabelToppost } from "./LabelToppost";
import { LabelTwo } from "./LabelTwo";

export const BodyComp = () => {
  return (
    <>
      <h1 className="label2">Latest Articles</h1>
      <hr className="hrstl3" />
      <div className="bodyc1">
        <div className="body1">
          <LabelTwo />
          <Label3img />
        </div>
        <div>
          <Advertise />
          <LabelToppost />
        </div>
      </div>
    </>
  );
};
