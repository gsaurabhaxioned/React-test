import { styled } from "styled-components";

export const BookTitleStyling = styled.thead` // styled component for books table column headings
  color: ${(props) => props.theme.thColor};

  th {
    cursor: pointer;
    @media only screen and (max-width: 767px) {
      font-size: 12px;
    }
  }

  .sort-order {
    color: #7fff00;
  }
`;
