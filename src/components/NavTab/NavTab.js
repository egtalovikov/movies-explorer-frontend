import React from "react";
import "./NavTab.css";

function NavTab() {
  return (
    <div className="navTab">
      <button
        onClick={() => window.location.replace("/#about-project")}
        className="navTab__button buttons"
      >
        О проекте
      </button>
      <button
        onClick={() => window.location.replace("/#techs")}
        className="navTab__button buttons"
      >
        Технологии
      </button>
      <button
        onClick={() => window.location.replace("/#about-me")}
        className="navTab__button buttons"
      >
        Студент
      </button>
    </div>
  );
}

export default NavTab;
