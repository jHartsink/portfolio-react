import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "../../styles/welcome-styles.css";
import { NavLink } from "react-router-dom";

function Welcome() {
  const loader1 = useRef();
  const TextReveal = useRef();

  useEffect(() => {
    gsap.from(loader1.current, {
      delay: 0.3,
      duration: 3,
      y: "-100%",

      yoyo: true,
      opacity: 0,
    });
  });
  useEffect(() => {
    gsap.to(TextReveal.current, {
      delay: 3.3,
      opacity: 1,
      duration: 2,
      ease: "power4.inOut",
    });
  });
  return (
    <>
      <div className="content-wrapper">
        <div className="background-drop" ref={loader1}>
          <NavLink className="Text" exact to="/Home" ref={TextReveal}>
            Welcome
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Welcome;
