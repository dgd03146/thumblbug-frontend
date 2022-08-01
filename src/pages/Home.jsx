import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Container from '../components/Home/Container';
import { layoutActions } from '../redux/layout-slice';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layoutActions.headerFix());
  }, []);

  return (
    <HomeContainer>
      <Container />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  margin-top: 0;
  margin-bottom: 3rem;
`;

export default Home;
