import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { layoutActions } from '../redux/layout-slice';
import { useLocation } from 'react-router-dom';
import Introduction from '../components/Project/Introduction';
import ProjectContents from '../components/Project/ProjectContents';

const Project = () => {
  const dispatch = useDispatch();

  const { state } = useLocation();
  const { project, time_difference } = state;

  useEffect(() => {
    dispatch(layoutActions.notHeaderFix()); // Header no fix
  }, []);

  return (
    <ProjectContainer>
      <Introduction project={project} time_difference={time_difference} />
      <ProjectContents project={project} />
    </ProjectContainer>
  );
};

export default Project;

const ProjectContainer = styled.div`
  padding: 2rem 10px;
`;
