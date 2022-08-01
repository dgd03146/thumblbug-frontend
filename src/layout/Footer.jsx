import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <HeaderLayOut>
      <HeaderWrapper>
        <HeaderUpperLayOut>
          <LogoWrapper>
            <MenuWrapper>
              <h3>텀블벅</h3>
              <p>공지사항</p>
              <p>서비스 소개</p>
              <p>채용</p>
              <p>2022 연말결산</p>
            </MenuWrapper>
            <MenuWrapper>
              <h3>이용안내</h3>
              <p>헬프 센터</p>
              <p>첫 후원 가이드</p>
              <p>창작자 가이드</p>
              <p>제휴 협력</p>
            </MenuWrapper>
            <MenuWrapper>
              <h3>정책</h3>
              <p>이용약관</p>
              <p>개인정보 처리방침</p>
              <p>프로젝트 심사 기준</p>
            </MenuWrapper>
            <MenuWrapper>
              <h3>App</h3>
              <p>안드로이드</p>
              <p>IOS</p>
            </MenuWrapper>
          </LogoWrapper>
          <StatusWrapper>
            <div>
              <h3>고객지원</h3>
              <p>평일 9:00 ~ 17:00 (12:00 ~ 14:00 제외)</p>
              <p>텀블벅에 문의</p>
            </div>
          </StatusWrapper>
        </HeaderUpperLayOut>
      </HeaderWrapper>
    </HeaderLayOut>
  );
};

export default Footer;

const HeaderLayOut = styled.footer`
  width: 100%;
  padding: 1rem 0;

  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;

  /* height: 60px; */

  border-top: 1px solid #ececec;

  p {
    color: ${(props) => props.theme.fontGray};
    cursor: pointer;
    margin: 0.7rem 0;
    font-weight: 500;
  }

  p:hover {
    color: ${(props) => props.theme.mainColor};
  }

  @media (max-width: 800px) {
    font-size: 0.9rem;
    p {
      margin: 0.5rem 0;
    }
  }

  @media (max-width: 500px) {
    font-size: 0.8rem;
    p {
      margin: 0.3rem 0;
    }
  }

  @media (max-width: 400px) {
    font-size: 0.6rem;
  }
`;

const HeaderWrapper = styled.div`
  width: 75%;
  @media (max-width: 1300px) {
    width: 90%;
  }

  @media (max-width: 1080px) {
    width: 95%;
  }
`;

const HeaderUpperLayOut = styled.div`
  position: relative;
  display: flex;
  width: 100%;

  padding: 10px 10px;

  -webkit-box-pack: justify;
  justify-content: space-between;

  @media (max-width: 1110px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  /* width: 132px; */
  min-height: 35px;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  justify-content: center;
  cursor: pointer;
  transition: scale 0.3s ease-in-out 0s;

  div {
    flex-direction: column;
  }
`;

const StatusWrapper = styled.div`
  transition: scale 0.3s ease-in-out 0s;

  @media (max-width: 1050) {
    width: 100%;
    justify-content: space-between;
  }
`;

const MenuWrapper = styled.div`
  margin-right: 5rem;

  @media (max-width: 800px) {
    margin-right: 3rem;
  }

  @media (max-width: 600px) {
    margin-right: 1rem;
  }
`;
