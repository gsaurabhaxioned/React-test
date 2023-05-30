import { styled } from "styled-components";

export const AddNewBookStyle = styled.div`
  flex-basis: 50%;

  h2 {
    color: ${props => props.theme.headingColor};
  }

  form {
    display: flex;
    flex-wrap: wrap;
    row-gap: 40px;
  }

  input,
  select,
  button {
    padding: 5px;
  }

  form > div {
    flex-basis: 40%;
    &:last-child {
      flex-basis: 100%;
      display: flex;
      justify-content: center;
      column-gap: 20px;
    }

    button {
      border: 1px solid #ffff00;
      border-radius: 5px;
      background-color: #00008b;
      &:hover {
        background-color: #add8e6;
        color: #00008b;
        border: 1px solid #00008b;
      }

      &.add-btn {
        padding: 5px 10px;
        border: 1px solid #ffffff;
        background-color: #006400;
        &:hover {
          background-color: #7fffd4;
        }
      }

      &.delete-btn {
        background-color: #ff0000;
        border: 1px solid #00008b;
        &:hover {
          background-color: #a52a2a;
          color: #ffffff;
        }
      }

      &.cancel-btn {
        background-color: #000000;
        border: 1px solid #ffffff;
        &:hover {
          background-color: #faebd7;
        }
      }
    }
    @media only screen and (max-width: 1476px) {
      flex-basis: 50%;
    }
    @media only screen and (max-width: 767px) {
      flex-basis: 48%;
    }
    @media only screen and (max-width: 616px) {
      flex-basis: 100%;
    }
  }

  label {
    color: ${props => props.theme.labelColor};
  }
`;

export const AddSectionStyle = styled.div`
  padding: 2% 2% 4%;;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 10px 10px;
  background-color: #faebd7;
  @media only screen and (max-width: 400px) {
    padding: 2% 6% 8%;
  }
`
