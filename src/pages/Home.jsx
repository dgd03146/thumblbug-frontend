import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Container from '../components/Home/Container';
import { layoutActions } from '../redux/layout-slice';
import { projectsApi } from '../shared/api';
import { useQuery, useQueryClient, QueryClient } from '@tanstack/react-query';
import { projectsActions } from '../redux/projects-slice';

const Home = () => {
  const dispatch = useDispatch();

  // const category = useSelector((state) => state.projects.category.value);

  // console.log(category, 'get 함수 밖');

  // 카데고리별 프로젝트 불러오기

  // query refetch 시킴

  // 모든 프로젝트 불러오기
  // const getProjectsAll = async () => {
  //   try {
  //     const res = await projectsApi.projectsAll(category);
  //     return res.data;
  //   } catch (error) {
  //     console.log(error.res);
  //   }
  // };

  // useQuery(['projects_all'], getProjectsAll, {
  //   onSuccess: (data) => {
  //     setData(data);
  //   }
  // });

  // api 전달하기 위해

  // FIXME: const sort = useSelector((state) => state.projects.sort.value);

  const queryClient = useQueryClient();

  const projects = useSelector((state) => state.projects.projects);
  console.log(projects, 'projects');

  const [categoryName, setCategoryName] = useState('전체');
  const [value, setValue] = useState('all');

  const onGetCategory = (categoryname, value) => {
    setCategoryName(categoryname);
    setValue(value);
  };

  const getProjectsCategory = async () => {
    // FIXME: projectsAll에 sort 인자로 전해줘야함
    // console.log(value, '함수 안');

    const { data } = await projectsApi.projectsAll(value);
    return data;
  };
  const { data, refetch } = useQuery(['projects_category'], () =>
    getProjectsCategory()
  );

  useEffect(() => {
    // FIXME: data가 있을때 useEffect로 setPosts 설정을 해야하나?
    // data가 바뀔때마다 projects를 data로 update
    if (data) {
      dispatch(projectsActions.setPosts(data));
    }
  }, [data]);

  useEffect(() => {
    queryClient.invalidateQueries('projects_category');
    refetch();
  }, [value]);

  useEffect(() => {
    dispatch(layoutActions.headerFix()); // header 고정
  }, []);

  return (
    <HomeContainer>
      <Container onGetCategory={onGetCategory} />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  margin-top: 0;
  margin-bottom: 3rem;
`;

export default Home;
