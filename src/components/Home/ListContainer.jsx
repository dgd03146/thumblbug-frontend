import { useCallback } from 'react';
import styled from 'styled-components';
import { projects } from '../../data';
import { useNavigate } from 'react-router-dom';

const ListContainer = () => {
  const navigate = useNavigate();

  const goToDetail = (projectId) => {
    navigate(`./project:${projectId}`);
  };

  // 남은 날짜 계산
  const difference = useCallback((date1, date2) => {
    const date1utc = Date.UTC(
      date1.getFullYear(),
      date1.getMonth(),
      date1.getDate()
    );
    const date2utc = Date.UTC(
      date2.getFullYear(),
      date2.getMonth(),
      date2.getDate()
    );
    const day = 1000 * 60 * 60 * 24;
    return (date2utc - date1utc) / day;
  }, []);

  return (
    <ListWrapper>
      {projects.map((it) => {
        let time = new Date().toISOString();
        const date1 = new Date(time.slice(0, 10)), // 현재 날짜
          date2 = new Date('2022-08-30'), // 종료날짜 FIXME: it.endDate
          time_difference = difference(date1, date2);

        return (
          <ProjectCardWrapper key={it.projectId}>
            <div>
              <ProjectCardImage
                onClick={() => {
                  goToDetail(it.projectId);
                }}
              >
                <img src={it.thumbnails[0]} alt="thumbnails" />
              </ProjectCardImage>
              <ProjectCardInfo>
                <div>
                  <ProjectSub>
                    <span>{it.category}</span>
                    <Seperator>{' | '}</Seperator>
                    <span>{it.creatorName}</span>
                  </ProjectSub>
                  <ProjectTitle
                    onClick={() => {
                      goToDetail(it.projectId);
                    }}
                  >
                    {it.title}
                  </ProjectTitle>
                  <ProjectDec>
                    {
                      '아니이게이러헥어렵다고이렇게이렁마ㅓ라ㅣㅁㄴ어리ㅏㅁ너이럼ㄴ이ㅏ럼ㄴ이럼닝ㅇㄴㄹㅇㄹㄴㅇㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹ'
                    }
                  </ProjectDec>
                </div>
              </ProjectCardInfo>
              <ProjectStatus>
                <div>
                  <FundingPercent>{`2758%`}</FundingPercent>
                  <FundingAmount>{it.totalFundingPrice}</FundingAmount>
                </div>
                <RestDay>{time_difference + '일 남음'}</RestDay>
              </ProjectStatus>
              <ProjectProgressBar></ProjectProgressBar>
            </div>
          </ProjectCardWrapper>
        );
      })}
    </ListWrapper>
  );
};

export default ListContainer;

const ListWrapper = styled.div`
  -webkit-box-pack: start;

  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-start;
  padding: 0px;

  @media (max-width: 650px) {
    flex-wrap: nowrap;
    flex-direction: column;
  }
`;

const ProjectCardWrapper = styled.div`
  box-sizing: border-box;
  margin-bottom: 2rem;

  width: 25%;

  > div {
    padding: 0 10px;
    @media (max-width: 650px) {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
    }
    @media (max-width: 550px) {
    }
  }

  @media (max-width: 1300px) {
    width: 25%;
  }
  @media (max-width: 1080px) {
    width: 50%;
  }
  @media (max-width: 650px) {
    width: 100%;
  }
`;

const ProjectCardImage = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  cursor: pointer;

  & :hover {
    transform: scale(1.1);
    transition: 300ms ease-in;
  }

  img {
    width: 100%;
  }
`;

const ProjectCardInfo = styled.div`
  > div {
    margin-bottom: 1rem;
  }
  div {
    margin: 0.5rem 0;
  }
`;

const ProjectSub = styled.div`
  span {
    font-size: 13px;
    color: rgb(61, 61, 61);
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
`;

const Seperator = styled.span`
  text-decoration: none;
`;

const ProjectTitle = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 500;
`;

const ProjectDec = styled.div`
  color: ${(props) => props.theme.fontGray};
  font-size: 14px;

  width: 93%;
  // 일정 글자 수 넘어가면 ...
  -webkit-line-clamp: 2;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ProjectStatus = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProjectProgressBar = styled.div`
  width: 100%;
  height: 3px;
  background-color: rgb(255, 87, 87); ;
`;

const FundingPercent = styled.span`
  font-size: 0.9rem;
  font-weight: 700;
  color: ${(props) => props.theme.mainColor};
`;

const FundingAmount = styled.span`
  margin-left: 4px;
  font-size: 0.8rem;
  line-height: 20px;
  letter-spacing: -0.015em;
  color: rgb(61, 61, 61);
`;

const RestDay = styled.span`
  margin-left: auto;
  font-size: 12px;
  line-height: 19px;
  letter-spacing: -0.01em;
  color: rgb(109, 109, 109);
  font-weight: 700;
`;
