import React from "react";
import { HeaderAppBar, HeaderLogo } from "./styles";
import { Toolbar, Container } from "@material-ui/core";

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderAppBar position={"sticky"}>
      <Toolbar component={Container}>
        <HeaderLogo src={"/img/logos/logo.svg"} alt="diarisyas"></HeaderLogo>
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
