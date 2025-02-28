import React from "react";
import {
  StyledButtonContainer,
  StyledDescriptionContainer,
  StyledHeroContainer,
  StyledImageContainer,
  StyledProfileImage,
} from "./HeroStyle";
import { Img } from "@/app/data/images";
import {
  StyledButtongGreyBg,
  StyledDisplayPdfBlackPage,
  StyledHeading1,
  StyledHeading3,
  StyledHeading6,
} from "@/styles/Styles";

export const Hero = () => {
  const { profile_pic} = Img;
  return (
    <StyledHeroContainer id="/">
        <StyledDescriptionContainer>
        <StyledHeading6>Hello, I'm </StyledHeading6>
        <StyledHeading1>Vaishnavi Karil</StyledHeading1>
        <StyledHeading3>Full Stack Developer</StyledHeading3>
        <StyledButtonContainer>
          <StyledDisplayPdfBlackPage
            href="/fullstackdeveloper.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </StyledDisplayPdfBlackPage>
          <StyledButtongGreyBg href="/#contact">
            Contact Info
          </StyledButtongGreyBg>
        </StyledButtonContainer>
      </StyledDescriptionContainer>
      <StyledImageContainer>
        <StyledProfileImage src={profile_pic} alt={profile_pic} />
      </StyledImageContainer>
    
    </StyledHeroContainer>
  );
};
