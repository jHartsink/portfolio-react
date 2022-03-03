/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import "../../styles/welcome-styles.css";

gsap.registerPlugin(TextPlugin);

export default function WelcomeText() {
  let masterTl = useRef();
  const cursor = useRef();
  const box = useRef();
  const text = useRef();
  const hi = useRef();
  const mainContent = useRef();

  const words = [
    " Justin.",
    " A Developer.",
    " A Photographer.",
    " A Trainee.Monk.",
  ];
  useEffect(() => {
    masterTl = gsap.timeline({ delay: 2 });
    words.forEach((word) => {
      const tl = gsap.timeline({ repeat: 1, yoyo: true });
      if (text.current) {
        tl.to(text.current, {
          repeatDelay: 1,
          duration: 1.3,
          text: word,
        });
      }
      masterTl.add(tl);
    });

    const temporaryTl = gsap.timeline({ yoyo: true });
    if (text.current) {
      temporaryTl.to(text.current, {
        text: words[0],
      });
    }
    masterTl.add(temporaryTl);
    const boxTl = gsap.timeline();

    if (box.current) {
      boxTl.to(box.current, {
        duration: 2,
        delay: 0.5,
        ease: "power4.inOut",
      });
      if (hi.current) {
        boxTl.to(hi.current, {
          onComplete: function Completed() {
            masterTl.play();
          },
        });
        if (box.current) {
          boxTl.to(box.current, {
            duration: 1,
            delay: 1,
            height: "7vw",
            padding: "10px",
            ease: "elastic.out",
          });
        }
        if (box.current) {
          boxTl.to(box.current, {
            autoAlpha: 0.7,
            yoyo: true,
            repeat: -1,
          });
        }
      }
    }

    if (cursor.current) {
      gsap.to(cursor.current, {
        opacity: 0,
        ease: "power2.inOut",
        repeat: -1,
      });
    }
    if (mainContent.current) {
      gsap.to(mainContent.current, {
        delay: 1,
        opacity: 1,
        ease: "power2.inOut",
      });
    }
  }, []);

  return (
    <>
      <div ref={mainContent} className="main-content">
        <div className="visual-wrapper">
          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQEiB9m0yH7IZg/profile-displayphoto-shrink_800_800/0/1635255797317?e=1651708800&v=beta&t=RSZBooa7wHMV2ghU0A61Njtuflda5JVT2Z7n98ISFNk"
            alt="myImage"
          />
        </div>
        <div className="hero-text">
          <h1>
            <span ref={box} className="box"></span>
            <span ref={hi} className="hi">
              Hi, I'm
            </span>
            <span ref={text} className="text"></span>
            <span ref={cursor} className="cursor">
              _
            </span>
          </h1>
        </div>
      </div>
    </>
  );
}
