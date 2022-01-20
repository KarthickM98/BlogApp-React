import React from "react";
import { BodyComp } from "./BodyComp";
import { LabelFooter } from "./LabelFooter";
import { LabelOne } from "./LabelOne";
import { TopFeaterudArts } from "./TopFeaterudArts";

export const Home = () => {
  return (
    <div>
      <TopFeaterudArts />
      <LabelOne />
      <BodyComp />
      <LabelFooter/>
    </div>
  );
};
