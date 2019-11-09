import React from "react";
import styled from 'styled-components';


const StyledHeroImage = styled.div`
 background: ${props =>
  `linear-gradient(
    to bottom, rgba(0,0,0,0)
    39%, rgba(0,0,0)
    41%, rgba(0,0,0,0.8)
    100%, cover;
  ),
  url('${props.image}'), #1c1c1c`};
  backround-size: 100%;
  backgorund-position: center, center;
  width: 100%;
  height: 600px;
  position: relative;
  animation: animationHeroimage 1s;



  .heroimage-content {
    max-width: 1280px;
    padding: 20px;
    margin: 0 auto;
  }

  .heroimage-text {
    z-index: 100;
    max-width: 700px;
    position: absolute;
    bottom: 40px;
    margin-right: 20px;
    min-height: 100px;
    color: #fff;

    h1 {
      font-family: 'abel', sans-serif;
      font-size: 48px;
      color: #fff;

      @media screen and (max-width: 720px) {
        font-size: 38px;
        color: #fff;
      }
    }

  }

 `;



const HeroImage = ({image, title, text}) => (
  <div image={image}>
    <div className = 'heroimage-content'>
      <div className = 'heroimage-text'>
        <h1>{title}</h1>
        <p>{text}</p>
 
    </div>
   </div>
  </div>
)

export default HeroImage;