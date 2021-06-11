import React from "react";
import { SafeEnvironmentContainerstyled } from "./styled";
import { Container } from "@material-ui/core";

const SafeEnvironment = () => {
  return (
    <SafeEnvironmentContainerstyled>
      <Container>
        Ambiente Seguro <i className={"twf-lock"} />
      </Container>
    </SafeEnvironmentContainerstyled>
  );
};

export default SafeEnvironment;
