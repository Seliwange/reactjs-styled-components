import './App.css';
import FormSignIn from './components/FormSignIn/FormSignIn';
import FormSignUp from './components/FormSignUp/FormSingUp';
import Main from './components/Main/Main';
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
        <Route path="reactjs-styled-components/" exact element={<Main />} />
        <Route path="reactjs-styled-components/sign-in" exact element={<FormSignIn />} />
        <Route path="reactjs-styled-components/sign-up" exact element={<FormSignUp />} />
      </Routes>
      <GlobalStyle />
    </div>
  );
}

export default App;
