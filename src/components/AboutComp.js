import React from "react"

import { AboutStyled } from "../styles/components"
import timeline from "../images/timelineC.svg"

export default function AboutComp() {
  return (
    <AboutStyled>
      <div className="container">
        <h1>About me</h1>
        <p>
          I am a Frontend Developer with four years of experience in web
          development, I have been React Development certified. I also have
          knowledge of agile development, and UX / IU. <br /> <br />
          An additional plus that you will find in me is that I am an
          Advertising Graphic Designer.
        </p>
        <img src={timeline} alt="timeline" className="timelineSty" />
      </div>
    </AboutStyled>
  )
}
