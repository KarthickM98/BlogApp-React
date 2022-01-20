import React, { useEffect, useState } from "react";
import { NavLink} from "react-router-dom";
import "./blogStyles.css"; //ths is serious

export const Header = () => {
  const [togfn, settogfn] = useState(false);
  const [screen, setscreen] = useState(window.innerWidth);
  const togglebtn = () => {
    settogfn(!togfn);
  };
  useEffect(() => {
    const changesize = () => {
      setscreen(window.innerWidth);
    };
    window.addEventListener("resize", changesize); //addinf event listener for updating
    return () => {
      //removing the eventlistener after update
      window.removeEventListener("resize", changesize);
    };
  }, []); //componentdidupdate equvivalent hooks!!
  return (
    <div className="stkhead">
      <h1 className="headsiren">
        <h2>The</h2>Siren
      </h1>
      {(togfn || screen > 660) && ( /// this is a shortcircuit funtion!!!
        <h2 className="titlelink">
          <NavLink
            className="nlink"
            style={({ isActive }) => {
              return { color: isActive ? "gray" : "" };
            }}
            to="./home"
          >
            {" "}
            Home
          </NavLink>
          <NavLink
            className="nlink"
            style={({ isActive }) => {
              return { color: isActive ? "gray" : "" };
            }}
            to="title/Bollywood"
          >
            {" "}
            Bollywood
          </NavLink>
          <NavLink
            className="nlink"
            style={({ isActive }) => {
              return { color: isActive ? "gray" : "" };
            }}
            to="title/Technology"
          >
            {" "}
            Technology
          </NavLink>
          <NavLink
            className="nlink"
            style={({ isActive }) => {
              return { color: isActive ? "gray" : "" };
            }}
            to="title/Hollywood"
          >
            {" "}
            Hollywood
          </NavLink>
          <NavLink
            className="nlink"
            style={({ isActive }) => {
              return { color: isActive ? "gray" : "" };
            }}
            to="title/Fitness"
          >
            {" "}
            Fitness
          </NavLink>
          <NavLink
            className="nlink"
            style={({ isActive }) => {
              return { color: isActive ? "gray" : "" };
            }}
            to="title/Food"
          >
            {" "}
            Food
          </NavLink>
        </h2>
      )}
      <hr className="hrstl" />
      <i onClick={togglebtn} className="fa fa-bars fa-2x bar" />
    </div>
  );
};
