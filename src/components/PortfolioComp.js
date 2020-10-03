import React from "react"
import { PortfolioStyled } from "../styles/components"
import anuncio from "../images/anuncio_grande.jpg"
import ceiqDisk from "../images/Disk-CEIQ.jpg"
import miaDisk from "../images/Disk-MIA.jpg"
import allen from "../images/etiqueta_allen.jpg"
import busiCard from "../images/businessCard.jpg"
import RadioPosi from "../images/RadioPositiva.jpg"
import buenDato from "../images/buenDato.jpg"
import campaings from "../images/portadaCamp.jpg"
import simuCeiq from "../images/simuladores.jpg"

export default function PortfolioComp() {
  return (
    <PortfolioStyled>
      <div className="container">
        <div className="item">item 01</div>
        <div className="item">Lastest Work</div>
        <div className="item">item 03</div>
        <div className="item">
          <li>Graphic Design</li>
          <li>Responsive Design</li>
          <li>Web Apps</li>
          <li>React JS</li>
          <li>Flutter</li>
          <li>Javascript</li>
          <li>CSS Grid Layout</li>
        </div>
        <div className="item">
          <div className="subitem level-1">
            <img src={anuncio} alt="wheel tube img" />
          </div>
          <div className="subitem level-2">
            <img src={ceiqDisk} alt=" ceiq cd" />
          </div>
          <div className="subitem level-3">
            <img src={miaDisk} alt=" mia cd" />
          </div>
          <div className="subitem level-1">
            <img src={allen} alt="etiqueta allen img" />
          </div>
          <div className="subitem level-2">
            <img src={busiCard} alt=" ceiq cd" />
          </div>
          <div className="subitem level-3">
            <img src={RadioPosi} alt=" mia cd" />
          </div>
          <div className="subitem level-1">
            <img src={campaings} alt="Portada Campanigs img" />
          </div>
          <div className="subitem level-2">
            <img src={simuCeiq} alt="Simuladores CEIQ img" />
          </div>
          <div className="subitem level-3">
            <img src={buenDato} alt="Buen dato shopping cd" />
          </div>
        </div>
        <div className="item">item 06</div>
      </div>
    </PortfolioStyled>
  )
}
