import './App.css';
import {ThemeProvider}from 'styled-components';
import Header from './layout/Header';
import { Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn/SignIn';
import { Container } from './shared/Styles';
import SignUp from './components/SignUp/SignUp';
import { useLocation } from 'react-router-dom';
import {theme} from "./shared/Styles"

function App() {
  const location = useLocation()
  console.log(location.pathname)
  
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Container>
      {!location.pathname.startsWith("/signUp") && <Header />}
      <Routes>
        <Route path="/signIn" element={<SignIn />}/>
        <Route path="/signUp" element={<SignUp />}/>
      </Routes>
      </Container>
      </ThemeProvider>
    </div>
  );
}


export default App;
