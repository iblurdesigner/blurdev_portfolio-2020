import styled from "styled-components"
import { above } from "./index"

export const colors = {
  turkey: "#57F3C3",
  orange: "#FF6900",
  red: "#FE0101",
  darkBlue: "#1F2441",
  lightBlue: "#979797",
  softGray: "#f6f8f9",
}

export const StyledHeader = styled.header`
  background-image: linear-gradient(
    90deg,
    ${colors.darkBlue},
    ${colors.lightBlue}
  );
  margin-bottom: 0;
  padding: 0 0.5rem 0 0;
  height: 3.5rem;
  width: 100%;
  max-width: 960;
  display: flex;
  position: fixed;
  z-index: 3;
  align-items: center;
  justify-content: space-between;
  a {
    height: 100%;
    font-size: 0.6rem;
  }
  & > a > img {
    margin: 0;
    background-color: ${colors.green};
    height: 100%;
    padding: 0.5rem 0.8rem;
  }
  & ul {
    list-style: none;
    margin: 0;
    display: flex;
    font-size: 0.2rem;
  }
  ${above.medium`
    padding: 0 2rem;
    height: 3.5rem;
    a{
      height: 100%;
      font-size: 0.8rem;
    }
  `}
  ${above.large`
    padding: 0 10rem;
    height: 4.5rem;
    a{
      height: 100%;
      font-size: 0.8rem;
    }
  `}
`
export const StyledJumbo = styled.div`
  // display: flex;
  // align-items: center;
  // flex-direction: column;
  // justify-content: center;
  // padding: 5px 5px;
  color: white;
  margin-bottom: 5rem;
  overflow: hidden;
  // position: relative;
  border: orange 1px solid;
  // width: 80vw;

  div {
    padding: 5px;
    // width: 90vw;
  }
  .container {
    display: grid;
    grid-template-columns: 30% 70%;
  }
  & .item {
    border: red solid 1px;
  }
  & h1 {
    margin: 0;
    font-weight: 900;
    font-size: 4rem;
  }
  & h2 {
    margin: 0;
    font-weight: 500;
    font-size: 1rem;
  }
  & small {
    font-weight: 100;
    font-size: 0.6rem;
  }
  & img {
    width: 35vw;
  }
  ${above.medium`
    padding: 2rem 4rem;
    flex-direction: row;
    & h2 {
      font-size: 1rem;
    };
    & small{
      font-size: 0.8rem;
    };
  `}
  ${above.mediumL`
    padding: 2rem 4rem;
    flex-direction: row;
    & h2 {
      font-size: 1rem;
    };
    & small{
      font-size: 0.8rem;
    };
  `}
  ${above.large`
    padding: 2rem 10rem;
    flex-direction: row;
    & h2 {
      margin: 0;
      font-weight: 500;
      font-size: 2rem;
    };
  `}
  &:before {
    content: " ";
    background-color: red;
    background-color: ${colors.darkBlue};
    z-index: -1;
    position: absolute;
    transform: rotate(-19deg);
    border-radius: 35%;
    top: -25%;
    width: 120%;
    height: 15rem;
    ${above.medium`
      height: 20rem;
      top: -50%;
    `}
    ${above.mediumL`
      height: 30rem;
      top: -60%;
    `}
    ${above.large`
      width: 110vw;
      height: 52vw;
      top: -66%;
    `}
  } ;
`

export const StyledJumbo2 = styled.div`
  .container {
    /* border: red solid 1px; */
    display: grid;
    width: 75vw;
    height: 550px;
    grid-template-columns: [inicio] 1fr [linea1] 1fr [linea2] 1fr [linea3] 1fr [final];
    grid-template-rows: [inicio] 1fr [linea1] 1fr [linea2] 1fr [final];
    grid-gap: 5px;
    margin: 0 auto;
    margin: 100px;
  }
  .redes {
    height: 25px;
  }

  .logoRedes {
    width: 18px;
    height: 18px;
    margin-right: 15px;
  }

  .item {
    /* border: yellow solid 1px; */
  }

  .item:nth-of-type(1) {
    grid-row: inicio / linea2;
    grid-column: inicio / linea2;
    height: 300px;
  }
  & h1 {
    font-weight: 900;
    font-size: 4rem !important;
    color: white;
  }

  .item:nth-of-type(2) {
    grid-row: inicio / linea2;
    grid-column: linea2 / final;
  }

  .item:nth-of-type(3) {
    grid-column: inicio / final;
    height: 80px;
    align-self: center;
  }

  & h1 {
    font-size: 2.9rem;
  }

  & small {
    color: white;
  }

  & image {
    height: 500px;
  }

  & button {
    /* border: 2px solid ${colors.turkey}; */
    color: ${colors.turkey};
    padding: 0;
    background-color: ${colors.darkBlue};
    padding: 8px 15px;
  }

  & a {
    text-decoration: none;
    color: ${colors.turkey};
  }
`
export const MenuItem = styled.li`
  margin: 0;
  color: white;
  font-size: 1.3rem;
  font-weight: 100;
  padding: ${({ margin }) => (margin ? "0 13px 0 13px" : "0 0 0 13px")};
  a {
    color: white;
    text-decoration: none;
  }
  & img {
    margin-right: 5px;
    width: 0.4rem;
  }
  ${above.medium`
    border-right: ${({ margin }) => (margin ? "1px solid white" : "")};
    padding: ${({ margin }) => (margin ? "0 26px 0 26px" : "0 0 0 26px")};
    & img{
      margin-right: 5px; 
      width: 0.7rem;
    }
  `}
`

export const AboutStyled = styled.div`
  .container {
    display: grid;
    width: 75vw;
    height: 100vh;
    grid-template-columns: 1fr;
    grid-template-rows: 20% 10% 1fr;
    grid-gap: 5px;
    margin: 0 auto;
    padding-top: 20px;
  }
  & h1 {
    color: white;
    font-size: 4.4rem;
  }
  & p {
    color: white;
  }
  & img {
    margin-top: 50px;
  }
`

export const PortfolioStyled = styled.div`
  .container {
    display: grid;
    width: 100vw;
    height: 100vh;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: 1fr 4fr;
    border: 1px solid ${colors.turkey};
  }
  .item {
    border: 1px solid red;
    color: white;
  }
`

export const Footer = styled.footer`
  background-color: ${colors.darkBlue};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  width: 100vw;
  bottom: 0;
  a {
    color: ${colors.green};
    margin-left: 0.3rem;
    text-decoration: none;
  }
`

export const SizeButton = styled.button`
  padding: calc(0.4rem + 1px);
  background-color: transparent;
  border: 2px solid rgba(0, 0, 0, 0.1);
  color: #272727;
  opacity: ${({ unavailable }) => (unavailable ? 0.4 : 1)};
  transition: 0.4s all ease;
  &:focus {
    outline: none;
  }
  &:hover {
    transform: scale(1.2);
  }
`

export const Button = styled.button`
  cursor: pointer;
  background-color: ${({ type }) =>
    type === "outline" ? "transparent" : colors.green};
  color: ${({ type }) => (type === "outline" ? colors.darkBlue : "white")};
  font-size: 0.9rem;
  padding: 0.6rem 1rem;
  font-weight: 500;
  border: ${({ type }) =>
    type === "outline"
      ? `3px solid ${colors.darkBlue}`
      : `3px solid ${colors.green}`};
  border-radius: 12px;
  a {
    text-decoration: none;
    color: ${({ type }) => (type === "outline" ? colors.darkBlue : "white")};
  }
  &:disabled {
    background-color: ${colors.gray};
    border-color: ${colors.gray};
    cursor: not-allowed;
  }
`

export const Content = styled.div`
  ${above.medium`
    padding-top: 3.5rem;
    `}
  ${above.large`
    padding-top: 4.5rem;
  `}
`
