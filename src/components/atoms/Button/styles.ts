import styled from "styled-components";

export const StyledButton = styled.button`
  margin: 10px;
  width: 100%;
  background-color: ${(props: { backgroundColor: string }) =>
    props.backgroundColor};
  height: 100px;
  border-radius: 20px;
  border: 8px outset dimgrey;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;
