import React, { useState } from "react";
import "../About/About.css";

import data from "./data";

import ArrorAbout from "../../images/logo.png"
import Mausoleum from "../../images/mausoleum.png"

const About = () => {
  const [clicked, setClicked] = useState(null);
  const toggle = (i) => {
    if (clicked === i) {
      return setClicked(null);
    }
    setClicked(i);
  };
  return (
    <div>

        <div className='aboutsection'>

        <div className="AboutContainer">
          <div className="AboutTitle">
            {/* <h1>Roadmap</h1> */}
          </div>
          {data.map((faq, i) => (
          <>
            <div
              className={"Wrap" + (clicked === i ? "Open" : "Closed")}
              onClick={() => toggle(i)}
            >
              <img
                src={ArrorAbout}
                className={"Arrow" + (clicked === i ? "Open" : "Closed")}
              />
              <h1>{faq.title}</h1>
              <img
                src={ArrorAbout}
                className={"Arrow" + (clicked === i ? "Open" : "Closed")}
              />
            </div>
            <div
              className={"Drop" + (clicked === i ? "Open" : "Closed")}
              onClick={() => toggle(i)}
            >
              <ul>
                {faq.content.map((lili) => (
                  <li>{lili}</li>
                ))}
              </ul>
            </div>
          </>
        ))}
      </div>

         <div className="MausoleumRight">
          <img src={Mausoleum}></img>
        </div>

      </div>

        
        
        <div className='Waves'>
  {/* <img src={Waves}></img> */}
</div>


    </div>
  );
};

export default About