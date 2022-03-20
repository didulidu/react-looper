import styled from "styled-components";

export const StyledGrid = styled.div`
  display: grid;
  width: 750px;
  grid-template-columns: repeat(3, 1fr);

  @media only screen and (max-width: 900px) {
    width: 450px;
  }
`;

export const StyledFooter = styled.div`
  margin-top: 20px;
  display: flex;
  width: 100%;
`;

export const buttonDimension = { width: "40px", height: "40px" };
