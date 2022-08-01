import React from 'react';
import styled from 'styled-components';
import DOMPurify from 'dompurify';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.core.css';
import ReactQuill from 'react-quill';

const ProjectContents = () => {
  const sanitizer = DOMPurify.sanitize;

  return (
    <Container>
      <MainColumn>
        <div>| 프로젝트 소개</div>
        <div
          className="view ql-editor"
          style={{ padding: 0 }}
          dangerouslySetInnerHTML={{
            __html: sanitizer(
              `<p>오 혹시 이것도 되나요</p><iframe class="ql-video" frameborder="0" allowfullscreen="true" src="https://www.youtube.com/embed/kORKuULdiKM?showinfo=0"></iframe><p><br></p>`,
              {
                ALLOWED_TAGS: ['iframe'],
                ADD_ATTR: [
                  'allow',
                  'allowfullscreen',
                  'frameborder',
                  'scrolling'
                ]
              }
            )
          }}
        ></div>
      </MainColumn>
      <SubColumn>
        <SubColumnInner>
          <CreatorCard>
            <div>
              <div className="creator-intro">창작자 소개</div>
              <div className="creator-wrapper">
                <div className="creator-profileImage">
                  <img src="/images/test.jpg" alt="" />
                </div>
                <div className="creator-name">{`창작자 이름`}</div>
              </div>
              <div className="creator-biography">
                {`나으이ㅣ르이나머리ㅏㅁㄴ어ㅏㅣ럼ㄴ이ㅏ러ㅏㅁㄴ아ㅣ럼니아러ㅣㅏㅁㄴ어리ㅓㅁㄴ이러ㅣㅁㄴ얼민어림ㅇ너림ㄴ얼민얾닝러ㅣㄴㅁ어림ㄴㅇㄹ`}
              </div>
              <div></div>
            </div>
          </CreatorCard>
          <StickerWrapper>
            <Rewards>
              <div>선물 선택</div>
              {/* FIXME: Reward 배열 받아서 map으로 돌려야함 */}
              <RewardCard>
                <div>{`1000원`} +</div>
                <div>{`선물 없이 후원하기`}</div>
              </RewardCard>
              <RewardCard>
                <div>{`1000원`} +</div>
                <div>{`선물 없이 후원하기`}</div>
              </RewardCard>
              <RewardCard>
                <div>{`1000원`} +</div>
                <div>{`선물 없이 후원하기`}</div>
              </RewardCard>
              <RewardCard>
                <div>{`1000원`} +</div>
                <div>{`선물 없이 후원하기`}</div>
              </RewardCard>
              <RewardCard>
                <div>{`1000원`} +</div>
                <div>{`선물 없이 후원하기`}</div>
              </RewardCard>
              <RewardCard>
                <div>{`1000원`} +</div>
                <div>{`선물 없이 후원하기`}</div>
              </RewardCard>
              <RewardCard>
                <div>{`1000원`} +</div>
                <div>{`선물 없이 후원하기`}</div>
              </RewardCard>
              <RewardCard>
                <div>{`1000원`} +</div>
                <div>{`선물 없이 후원하기`}</div>
              </RewardCard>
            </Rewards>
          </StickerWrapper>

          <StickerGhost></StickerGhost>
        </SubColumnInner>
      </SubColumn>
    </Container>
  );
};

export default ProjectContents;

const Container = styled.div`
  /* width: 1040px; */
  padding: 3rem 0;
  display: flex;
  flex-wrap: nowrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
  gap: 38px;
  margin: 0px auto;
`;

const MainColumn = styled.div`
  order: 1;
  width: 100%;
  padding-bottom: 3rem;
  @media (min-width: 1080px) {
    flex: 1 1 650px;
  }
  & div:first-child {
    display: flex;
    color: rgb(13, 13, 13);
    font-weight: 700;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 3rem;
    font-size: 18px !important;
    line-height: 28px !important;
  }
`;

const SubColumn = styled.div`
  order: 2;
  width: 100%;
  margin: 0px;

  @media (min-width: 1080px) {
    display: block;
    flex: 0 1 352px;
    max-width: 352px;
    /* padding-top: 25px; */
  }
`;

const SubColumnInner = styled.div`
  width: 100%;

  @media (min-width: 1080px) {
    min-height: 500px;
  }
`;

// const EventBannerWrap = styled.div`
//   @media (min-width: 1080px) {
//     margin-bottom: 24px;
//     display: block;
//   }
// `;

const CreatorCard = styled.div`
  width: 100%;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  transition: box-shadow 0.2s ease-in-out 0s;
  -webkit-tap-highlight-color: transparent;
  padding: 2rem 1rem;

  @media (min-width: 1080px) {
    border: 1px solid rgb(239, 239, 239);
    box-shadow: rgb(0 0 0 / 10%) 0px 1px 0px, rgb(0 0 0 / 4%) 0px 2px 4px;
  }

  @media (min-width: 1080px) {
    display: block;
  }

  div.creator-intro {
    display: block;
    padding: 5px 0px 20px;
  }
  div.creator-wrapper {
    display: flex;
    -webkit-box-align: start;
    align-items: center;

    .creator-name {
      color: rgb(61, 61, 61);
      font-weight: bolder;
    }
  }

  div.creator-profileImage {
    border-radius: 50%;
    margin-right: 0.8rem;
    & img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
  div.creator-biography {
    font-weight: 400;
    color: rgb(109, 109, 109);
    padding-top: 18px;
    font-size: 13px !important;

    line-height: 22px !important;
  }
`;

const StickerWrapper = styled.div`
  padding-top: 2rem;
  transition: height 0.1s ease 0s;
`;

const Rewards = styled.div`
  width: 100%;
  height: auto;
  padding: 24px 0px 0px;
`;

const RewardCard = styled.div`
  cursor: pointer;
  margin: 1rem 0;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 0px, rgb(0 0 0 / 4%) 0px 2px 4px;
  padding: 20px;
  width: 100%;
  background-color: rgb(255, 255, 255);
  transition: height 0.2s ease 0s, box-shadow 0.2s ease 0s,
    border 0.2s ease-in-out 0s;
  -webkit-tap-highlight-color: transparent;
  border: 1px solid rgb(239, 239, 239);

  :hover {
    border: solid 1px gray;
  }

  div:first-child {
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.025em;
    margin: 0px 0px 6px;
    font-weight: 600;
    color: #3d3d3d;
  }
  div:last-child {
    font-size: 0.9rem;
    color: #3d3d3d;
  }
`;

const StickerGhost = styled.div``;
