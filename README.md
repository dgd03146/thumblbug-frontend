# Readme

# 텀블벅

## 📢프로젝트 소개

다양한 아이디어 상품을 후원하고 후원받는 펀딩 커뮤니티 사이트, 텀블벅을 클론코딩했습니다.

[프로젝트 링크](http://tumblbug-clone.s3-website.ap-northeast-2.amazonaws.com/)


## 🎬시연 영상

[유튜브 시연 링크](https://www.youtube.com/watch?v=pitNSMnWOXs)

## 📅프로젝트 기간

2022년 7월 28일 ~ 2022년 8월 4일

## **🔨 사용 기술 및 라이브러리**

- React
- 

<br/>

## ****👨‍👩‍👧‍👦팀원****

- Front-end : 임거정, 노희정
- Back-end : 김현, 권유경, 김송이

<br/>

## 💡핵심 기능
[API 설계 링크](https://gelatinous-macadamia-65a.notion.site/e72b9b4d9a194ab3a57084df8f47bf1a?v=efac60dd4a6a4d81889f2e11233273f1) 

- 창작자는 아이디어 상품을 제작하기 전, 후원을 받을 수 있는 프로젝트를 생성할 수 있습니다.
- 후원자는 창작자의 프로젝트 계획과 후원시에 받을 수 있는 선물을 확인 후 특정 선물을 포함하는 후원아이템을 선택 해 후원할 수 있습니다.
- 창작자가 설정한 목표금액에 도달 시에 프로젝트는 성공이되고, 창작자는 아이디어 상품을 직접 제작하고 후원자에게 선물을 전달 할 수 있습니다.
- 후원자는 자신이 후원한 프로젝트와 후원아이템을 내 후원현황에서 확인할 수 있습니다.

## 💫Trouble Shooting


- **React-quill 에디터에서 OS X 환경, Chrome 에서 한글 자모가 분리되어 입력되는 현상**
    
    → 일부 escape 문자를 onChange시마다 치환해서 사용하여 해결
    
- **useQuery를 특정 상황에서만 동작하게 하기.**
    
    → enabled를 state로 값을 주어서 state의 초기값을 false로 준 다음 onClick을 했을때 state값을 변경시킨다.
    
- **useEffect 의 return 안에서 맨 위의 selector 로 받아온 redux 데이터가 들어오지 않는 현상**
    
    → 함수 컴포넌트 최상위에서 재정의 혹은 옵셔널 체이닝으로 빈값일 경우 체크해서 해결한다.
    
- **다른 컴포넌트에 dom 요소로 스크롤 하는 방법**
    
    → forwradrRef로 ref 값을 props를 전달하여 다른 컴포넌트의 돔요소에 접근한다.
    
    

<br/>

## **기타**

[노션링크](https://www.notion.so/tumblbug-2-256d08cd3a8d43c4ad955cf40f8c83a3)
