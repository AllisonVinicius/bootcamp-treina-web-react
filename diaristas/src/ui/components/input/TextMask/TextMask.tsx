import React from "react";

// import { Container } from './styles';
import TextField from "ui/components/input/TextFild/TextFild";
import InputMask from "react-input-mask";
import {OutlinedTextFieldProps} from '@material-ui/core';

export interface TextMaskProps extends OutlinedTextFieldProps {
  mask: string;
}
const TextMask: React.FC<TextMaskProps> = ({ mask, ...props }) => {
  return (
    <InputMask mask={mask}
      {() => {
        return <TextField {...mask} />
      }}
    </InputMask>
  );
};

export default TextMask;
