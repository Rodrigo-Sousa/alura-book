import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './routers/Home';
import reportWebVitals from './reportWebVitals';
// Importando um css globalmente
import { createGlobalStyle } from 'styled-components';
// Importando o pacote react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Importando o header
import Header from "./components/Header";
// Importando o componente Favoritos
import Favoritos from './routers/Favoritos';

const GlobalStyle = createGlobalStyle`
  /* CSS padrão. */

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
    li {
      list-style: none;
    }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    {/* Que encapsulará as rotas, permitindo a criação delas */}
    <BrowserRouter>
      {/* Utilizando o componente Header */}
      <Header />
      {/* Que anuncia a presença de rotas */}
      <Routes>
        {/* A rota propriamente dita */}
        <Route path='/favoritos' element={
          <p>
            <Favoritos />
          </p>
        } />
        {/* Rota - home */}
        <Route path='/' element={
          <Home />
        } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
