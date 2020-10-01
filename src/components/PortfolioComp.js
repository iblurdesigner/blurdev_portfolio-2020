import React from "react"
import { PortfolioStyled } from "../styles/components"

export default function PortfolioComp() {
  return (
    <PortfolioStyled>
      <div className="container">
        <div className="item">item 01</div>
        <div className="item">Lastest Work</div>
        <div className="item">item 03</div>
        <div className="item">item 04</div>
        <div className="item">item 05</div>
        <div className="item">item 06</div>
      </div>
    </PortfolioStyled>
  )
}
