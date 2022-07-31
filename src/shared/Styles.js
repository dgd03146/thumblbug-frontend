import styled from "styled-components";

export const theme = {
  error: "#FF5757",
};

export const Container = styled.div`
  position: relative;
  display: block;
  width: 100%;
  -webkit-box-flex: 1;
  flex-grow: 1;
  background: rgb(255, 255, 255);
`;

export const FormInputLabel = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: rgb(61, 61, 61);
  margin: 0px 0px 10px;
`;

export const FormInputWrapper = styled.div`
  @media only screen and (min-width: 1080px) {
    /* width: 328px; */
  }
  &:last-of-type {
    margin: 0;
  }
  width: 100%;
  margin: 0px 0px 12px;
  span {
    border: 1px solid
      ${(props) => {
        if (props.error) {
          return props.theme.error;
        } else if (props.focus) {
          return "rgb(61,61,61)";
        } else {
          return "rgb(230, 230, 230)";
        }
      }};
    color: rgb(13, 13, 13);
    background: rgb(255, 255, 255);
    padding: 0px 12px;
    max-height: 44px;
    min-width: 100px;
    display: flex;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.015em;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 1px;
    border-radius: 1px;
  }
  input {
    padding: 13px 0px;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 100%;
    background: transparent;
    border: 0px;
    padding: 11px 0px;
    box-sizing: border-box;
    height: 100%;
    outline: none;
    margin: 0px;
    appearance: none !important;
    line-height: normal;
    caret-color: #ff5757;
    font-size: 14px;
  }
`;

export const SmallTextWrapper = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  margin: 50px 0px 0px;
  font-size: 12px;
  line-height: 19px;
  letter-spacing: -0.01em;
  font-weight: 500;
  color: rgb(158, 158, 158);
  span {
    margin: 0px 0px 0px 4px;
  }
  a {
    color: rgb(39, 163, 255);
    text-decoration: underline;
  }
`;

export const H1Typo = styled.h1`
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.025em;
    text-align: left;
    margin: 0px 0px 32px;
`

export const H3Typo = styled.h3`
  @media only screen and (min-width: 1080px) {
    margin-bottom: 50px;
    font-size: 24px;
    text-align: left;
  }
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
`;

export const ErrorHelperText = styled.div`
  margin: 0px 0px 12px;
  color: rgb(255, 87, 87);
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.015em;
`;

export const BigRedButton = styled.button`
    &:hover,
    &:active {
      opacity: 0.6;
    }
    margin-top: 30px;
    border-radius: 1px;
    font-size: 16px;
    line-height: 27px;
    letter-spacing: -0.02em;
    width: 100%;
    cursor: pointer;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    height: 52px;
    white-space: nowrap;
    border-radius: 1px;
    margin: 0px;
    border: 0px;
    outline: none;
    font-weight: bold;
    box-sizing: border-box;
    padding: 0px 24px;
    background-color: rgb(248, 100, 83);
    color: rgb(255, 255, 255);
    margin-top: 30px;
    @media only screen and (min-width: 1080px) {
      margin-top: 40px;
    }
`

export const CopyrightFooter = styled.div`
  display: block;
  width: 100%;
  color: rgb(158, 158, 158);
  font-size: 13px;
  line-height: 20px;
  text-align: center;
`

