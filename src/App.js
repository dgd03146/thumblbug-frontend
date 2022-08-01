import './App.css';
import { Routes, Route } from 'react-router-dom';

import Container from './layout/Container';
import Home from './pages/Home';
import GlobalStyle from './styles/global';
import Project from './pages/Project';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Container />}>
          <Route index element={<Home />} />
          <Route path="/project:projectId" element={<Project />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
