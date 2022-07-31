import React from "react";
import styled from "styled-components";
// import "./SignIn.css"
import {
  FormInputLabel,
  FormInputWrapper,
  SmallTextWrapper,
  H3Typo,
  BigRedButton
} from "../../shared/Styles";

const SignIn = (props) => {
  return (
    <>
      <MembershipContainer>
        <CenterContainer>
          <SignInContainer>
            <H3Typo>이메일로 로그인</H3Typo>
            <FormInputLabel>이메일 주소</FormInputLabel>
            <FormInputWrapper>
              <span className="style-signin">
                <input type="text" placeholder="이메일 주소를 입력해주세요" />
              </span>
            </FormInputWrapper>
            <FormInputLabel>비밀번호</FormInputLabel>
            <FormInputWrapper>
              <span>
                <input type="text" placeholder="비밀번호를 입력해주세요" />
              </span>
            </FormInputWrapper>
            <BigRedButton>
              <span>로그인</span>
            </BigRedButton>
            <SmallTextWrapper>
              아직 텀블벅 계정도 없냐? 하나 만들어라
              <span>
                <a href="signUp">회원가입</a>
              </span>
            </SmallTextWrapper>
          </SignInContainer>
        </CenterContainer>
        <RightBackground />
      </MembershipContainer>
    </>
  );
};

const MembershipContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 100%;
`;

const SignInContainer = styled.div`
  @media only screen and (min-width: 1080px) {
    margin: 0px;
    max-width: 414px;
  }
  width: 100%;
  max-width: 328px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const RightBackground = styled.div`
  @media only screen and (min-width: 1080px) {
    display: block;
    position: absolute;
    top: 0px;
    right: 0px;
    width: 50%;
    height: 100%;
    background-image: url(https://tumblbug-assets.s3.ap-northeast-1.amazonaws.com/static_assets/login/bg_login_email.jpg);
    background-size: cover;
    background-position: center center;
  }
`;

const CenterContainer = styled.div`
  @media only screen and (min-width: 1080px) {
    /* min-height: calc(100% - 66px); */
    padding: 80px 16px;
  }
  flex-direction: column;
  box-sizing: border-box;

  display: flex;
  -webkit-box-align: center;
  align-items: flex-start;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
  max-width: 1080px;
  /* min-height: calc(100% - 66px); */
  height: 100%;
  padding: 80px 16px 20px;
  margin: 0px auto;

  
`;

export default SignIn;
