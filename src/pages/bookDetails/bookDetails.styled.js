import { styled } from "styled-components";

export const StyledBookDetails = styled.div`
  padding: 5%;
  background-color: ${(props) => props.theme.sectionBackgroundColor};
  display: flex;
  @media only screen and (max-width: ${props => props.theme.ipad}) {
    flex-direction: column;
  }
  .book-image {
    flex-basis: 49%;
    text-align: center;
  }
  .book-info {
    flex-basis: 49%;
    color: #ffffff;
    h2,
    h3 span {
      color: #ffff00;
      font-style: italic;
    }
  }
`;
