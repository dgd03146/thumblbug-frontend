import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { layoutActions } from '../redux/layout-slice';

const Project = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layoutActions.notHeaderFix());
  }, []);

  return <ProjectContainer>ProjectDetail</ProjectContainer>;
};

export default Project;

const ProjectContainer = styled.div`
  padding: 2rem 10px;
`;
