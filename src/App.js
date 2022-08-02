import './App.css';
import {ThemeProvider}from 'styled-components';
import Header from './layout/Header';
import { Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn/SignIn';
import { Container } from './shared/Styles';
import SignUp from './components/SignUp/SignUp';
import { useLocation } from 'react-router-dom';
import {theme} from "./shared/Styles"
import ProjectEditor from './components/ProjectEditor/ProjectEditor';
import axios from 'axios';
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const location = useLocation()
  const queryClient = new QueryClient()
  console.log(location.pathname)
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <ThemeProvider theme={theme}>
      <Container>
      {!location.pathname.startsWith("/signUp") 
      && !location.pathname.startsWith("/project-editor")
      && <Header />}
      <Routes>
        <Route path="/signIn" element={<SignIn />}/>
        <Route path="/signUp" element={<SignUp />}/>
        <Route path="/project-editor/:tab" element={<ProjectEditor />}/>
      </Routes>
      </Container>
      </ThemeProvider>
    </div>
    </QueryClientProvider>
  );
}


export default App;
