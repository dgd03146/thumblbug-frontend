import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { layoutActions } from '../redux/layout-slice';
import { useLocation, useParams } from 'react-router-dom';
import { projectsApi } from '../shared/api';
import Introduction from '../components/Project/Introduction';
import ProjectContents from '../components/Project/ProjectContents';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { projectsActions } from '../redux/projects-slice';

const Project = () => {
  const dispatch = useDispatch();
  const { projectId } = useParams();
  const project = useSelector((state) => state.projects.project);

  const getProject = async () => {
    try {
      const res = await projectsApi.projectDetail(projectId);
      return res.data;
    } catch (error) {
      console.log(error.res);
    }
  };

  const { data } = useQuery(['project'], getProject, {});

  useEffect(() => {
    dispatch(layoutActions.notHeaderFix()); // Header no fix
  }, []);

  useEffect(() => {
    if (data) {
      dispatch(projectsActions.setPost(data));
    }
  }, []);

  const rewardRef = useRef(null);

  return (
    <ProjectContainer>
      <Introduction project={project} rewardRef={rewardRef} />
      <ProjectContents project={project} ref={rewardRef} />
    </ProjectContainer>
  );
};

export default Project;

const ProjectContainer = styled.div`
  padding: 2rem 10px;
`;
