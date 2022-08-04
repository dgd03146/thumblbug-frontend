import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import HomeWrapper from '../components/Home/HomeWrapper';
import { layoutActions } from '../redux/layout-slice';
import { projectsApi } from '../shared/api';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { projectsActions } from '../redux/projects-slice';

const Home = () => {
  const dispatch = useDispatch();

  // const isHeaderFixed = useSelector((state) => state.layout.headerFixed); // 홈에서만 헤더 고정

  // FIXME: const sort = useSelector((state) => state.projects.sort.value);

  const queryClient = useQueryClient();

  // const [categoryName, setCategoryName] = useState('전체');
  const [value, setValue] = useState('all');
  const [sort, setSort] = useState('popular');
  const [query, setQuery] = useState('');

  const onGetCategory = (value) => {
    // setCategoryName(categoryname);
    setValue(value);
  };

  const onSort = (value) => {
    setSort(value);
  };

  const onSearch = (query) => {
    setQuery(query);
  };

  const getProjectsCategory = async () => {
    // FIXME: projectsAll에 sort 인자로 전해줘야함
    // console.log(value, '함수 안');

    const { data } = await projectsApi.projectsAll(value, sort, query);
    return data;
  };

  const { data, refetch } = useQuery(['projects_category'], () =>
    getProjectsCategory()
  );

  useEffect(() => {
    if (data) {
      dispatch(projectsActions.setPosts(data));
    }
  }, [data]);

  useEffect(() => {
    queryClient.invalidateQueries('projects_category');
    refetch();
  }, [value, query, sort]);

  useEffect(() => {
    dispatch(layoutActions.headerFix()); // header 고정
  }, []);

  return (
    <HomeContainer>
      <HomeWrapper
        onGetCategory={onGetCategory}
        onSearch={onSearch}
        onSort={onSort}
      />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  margin-top: 0;
  margin-bottom: 3rem;
`;

export default Home;
