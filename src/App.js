import './App.css';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { theme } from './shared/Styles';
import ProjectEditor from './components/ProjectEditor/ProjectEditor';
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { authActions } from './redux/auth-slice';
import Container from './layout/Container';
import React, { lazy } from 'react';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';

const Project = lazy(() => import('./pages/Project'));
const SignIn = lazy(() => import('./components/SignIn/SignIn'));
const SignUp = lazy(() => import('./components/SignUp/SignUp'));
const Home = lazy(() => import('./pages/Home'));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      dispatch(authActions.userLogin(jwtDecode(token).NAME));
    }
  }, []);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Container />}>
            <Route index element={<Home />} />
            <Route path="/project/:projectId" element={<Project />} />
          </Route>
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/project-editor/:tab" element={<ProjectEditor />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
