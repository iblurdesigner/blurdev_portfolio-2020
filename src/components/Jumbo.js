import React from "react"
import { Link } from "gatsby"
import { StyledJumbo2 } from "../styles/components"
import githubLogo from "../images/github-logo.svg"
import behance from "../images/behance-logo.svg"
import linkedin from "../images/linkedin-logo.svg"
import avatar from "../images/avatar.png"

export default function Jumbo() {
  return (
    <StyledJumbo2>
      <div className="container">
        <div className="item">
          <h1 className="item">
            Hi,
            <br />
            I'm Blur,
            <br />
            web developer
          </h1>
          <small className="item">
            Front End Developer / Graphic Designer / Freelancer
          </small>
        </div>
        <div className="item">
          <img src={avatar} alt="avatar blur" />
        </div>
        <div className="item">
          <button>CONTACT ME</button>
        </div>
        <div className="item">
          <img src={githubLogo} alt="logo github" className="logoRedes" />
          <Link to="https://github.com/iblurdesigner">iblurdesigner</Link>
        </div>
        <div className="item">
          <img src={linkedin} alt="logo linkedin" className="logoRedes" />
          <Link to="https://www.linkedin.com/in/blurdev/">blurdev</Link>
        </div>
        <div className="item">
          <img src={behance} alt="logo behance" className="logoRedes" />
          <Link to="https://www.behance.net/iblurdesigner">iblurdesigner</Link>
        </div>
      </div>
    </StyledJumbo2>
  )
}
