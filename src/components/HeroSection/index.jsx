import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HeroStyle'
import HeroImg from './daksh.jpg';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hey, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                    </HeroLeftContainer>
<HeroRightContainer id="Right">
  <div
    style={{
      position: "relative",
      width: "320px",
      height: "320px",
      margin: "2rem auto",
      borderRadius: "1.75rem",
      background: "linear-gradient(135deg, #343457 70%, #ff5733 120%)",
      boxShadow: "0 12px 36px 0 rgba(31,38,135,0.25), 0 2px 12px #ff573350",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      transition: "box-shadow 0.3s, transform 0.3s",
      maxWidth: "90vw",
      maxHeight: "90vw",
      cursor: "pointer"
    }}
    onMouseOver={e => {
      e.currentTarget.style.boxShadow = "0 18px 56px 0 rgba(31,38,135,0.32), 0 5px 20px #ff573360";
      e.currentTarget.style.transform = "scale(1.03) rotate(-2deg)";
    }}
    onMouseOut={e => {
      e.currentTarget.style.boxShadow = "0 12px 36px 0 rgba(31,38,135,0.25), 0 2px 12px #ff573350";
      e.currentTarget.style.transform = "scale(1) rotate(0deg)";
    }}
  >
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(120deg, rgba(255,87,51,0.18), rgba(255,255,255,0.03), rgba(52,52,87,0.10))",
        zIndex: 1,
        pointerEvents: "none",
        opacity: 0.85
      }}
    />
    <Img
      src={HeroImg}
      alt="hero-image"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "1.75rem",
        zIndex: 2,
        boxShadow: "0 1.5px 8px #ff57332c",
        transition: "box-shadow 0.2s"
      }}
    />
  </div>
</HeroRightContainer>

                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection