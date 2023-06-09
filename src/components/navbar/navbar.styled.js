import { styled } from "styled-components";

export const StyledNavbar = styled.div` // styled component for navbar
ul {
  li {
    list-style: none;
    a {
    margin: auto 20px;
    font-size: 25px;
    font-weight: bold;
    background-color: ${props => props.theme.primaryButtonColor};
    color: ${props => props.theme.whiteColor};
    text-decoration: none;
  }
  }
}
`;
