import './App.css';
import FormSignIn from './components/FormSignIn/FormSignIn';
import FormSignUp from './components/FormSignUp/FormSingUp';
import { Routes, Route } from 'react-router';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body{
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
`;

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="sign-in" element={<FormSignIn />} />
        <Route path="sign-up" element={<FormSignUp />} />
      </Routes>
      <GlobalStyle />
    </div>
  );
}

export default App;
