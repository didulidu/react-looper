import styled from "styled-components";
import { StyledPadProps } from "./types";

export const StyledPad = styled.div`
  width: 200px;
  height: 200px;
  border: 10px outset dimgrey;
  border-radius: 35px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  margin: 10px;
  background-color: ${(props: StyledPadProps) =>
    props.isPressed
      ? props.isPlaying
        ? "salmon"
        : "lightblue"
      : "lightgreen"};
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 900px) {
    width: 100px;
    height: 100px;
  }
`;

export const iconDimension = {
  width: "50%",
  height: "50%",
};
