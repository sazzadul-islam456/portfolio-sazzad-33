import React from "react";
import "./scrollup.css";
import ScrollDown from "./../home/ScrollDown";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const ScrollUp = document.querySelector(".scrollup");
    //when the scroll 560 view
    if (this.scrollY >= 560) ScrollUp.classList.add("show-scroll");
    else ScrollUp.classList.remove("show-scroll");
  });
  return (
    <a href="#" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default ScrollUp;
