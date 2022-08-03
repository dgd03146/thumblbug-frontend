import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { layoutActions } from '../redux/layout-slice';
import { useLocation, useParams } from 'react-router-dom';
import { projectsApi } from '../shared/api';
import Introduction from '../components/Project/Introduction';
import ProjectContents from '../components/Project/ProjectContents';
import { useQuery } from '@tanstack/react-query';
import { projectsActions } from '../redux/projects-slice';

const Project = () => {
  const dispatch = useDispatch();

  const { projectId } = useParams();

  const project = useSelector((state) => state.projects.project);

  // const projects = useSelector((state) => state.projects.projects);
  // const [targetPosts, setTargetPosts] = useState();

  // useEffect(() => {
  //   const targetPosts = projects.find((it) => it.projectId == projectId);
  //   console.log(targetPosts, '타겟포스트들');
  //   setTargetPosts(targetPosts);
  // }, []);

  // console.log(targetPosts, 'targetPosts');

  const getProject = async () => {
    try {
      const res = await projectsApi.projectDetail(projectId);
      return res.data;
    } catch (error) {
      console.log(error.res);
    }
  };

  const { data } = useQuery(['project'], getProject, {});

  // const { state } = useLocation();
  // const { project, time_difference } = state;

  useEffect(() => {
    dispatch(layoutActions.notHeaderFix()); // Header no fix
  }, []);

  useEffect(() => {
    dispatch(projectsActions.setPost(data));
  }, []);

  // time_difference={time_difference}

  return (
    <ProjectContainer>
      <Introduction project={project} />
      <ProjectContents project={project} />
    </ProjectContainer>
  );
};

export default Project;

const ProjectContainer = styled.div`
  padding: 2rem 10px;
`;
