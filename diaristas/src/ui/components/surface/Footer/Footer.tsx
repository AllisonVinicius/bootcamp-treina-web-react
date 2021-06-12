import React from "react";
import { AppList, FooterStyled } from "./styles";
// import { Container } from './styles';
import { FooterContainer, FooterTitle } from "./styles";
import { Typography, Box } from "@material-ui/core";

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle>Quem Somos</FooterTitle>
          <Typography variant={"body2"} sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed iusto
            repudiandae ipsam, illo reprehenderit error eligendi dignissimos
            aspernatur earum obcaecati molestias nulla similique aperiam?
            Delectus voluptatem officiis sequi maxime soluta?
          </Typography>
        </Box>

        <div>
          <FooterTitle>Baixe nossos App</FooterTitle>
          <AppList>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/app-store.png"} alt={"app "} />
              </a>
            </li>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/google-play.png"} alt={"app "} />
              </a>
            </li>
          </AppList>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
