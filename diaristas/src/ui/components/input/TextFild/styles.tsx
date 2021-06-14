import { experimentalStyled as styled } from "@material-ui/core";
import { TextField } from "@material-ui/core";

export const TextFieldStyles = styled(TextField)`
  .MuiInputBase-root {
    background-color: ${({ theme }) => theme.palette.grey[50]};
  }

  .MuiInput-notchedOutline {
    border-color: ${({ theme }) => theme.palette.grey[100]};
  }
`;
