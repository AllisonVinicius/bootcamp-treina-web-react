import React from "react";
import { FooterStyled } from "./styles";
// import { Container } from './styles';
import { FooterContainer, FooterTitle } from "./styles";
import { Typography } from "@material-ui/core";

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <FooterTitle>Quem Somos</FooterTitle>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed iusto
          repudiandae ipsam, illo reprehenderit error eligendi dignissimos
          aspernatur earum obcaecati molestias nulla similique aperiam? Delectus
          voluptatem officiis sequi maxime soluta?
        </Typography>
        <FooterTitle>Baixe nossos App</FooterTitle>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
