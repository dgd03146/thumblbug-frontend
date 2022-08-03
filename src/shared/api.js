import axios from 'axios';

const api = axios.create({
  baseURL: 'http://3.39.231.144/',
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json,'
  }
});

api.interceptors.request.use(function (config) {
  const accessToken = localStorage.getItem('TOKEN'); // localStorage에 TOKEN 저장
  config.headers.common['Authorization'] = `${accessToken}`; // Header에 토큰을 넣어서 보내준다.
  return config;
});

export const authApi = {};

export const projectsApi = {
  // home 페이지에 모든 프로젝트 받기
  projectsAll: (category) => api.get(`/api/projects?category=${category}`), // FIXME: /api/projects?category=${category}&sort=${sort}

  // 상세 페이지에 프로젝트 가져오기
  projectDetail: (projectId) => api.get(`/api/projects/${projectId}`) // FIXME: /api/projects/{projectId}
};
