import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MyHeader from './components/MyHeader';
import ArticleList from './components/ArticlesList';
import ArticlesDetails from './components/ArticlesDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    <BrowserRouter>
    <MyHeader />
    <Routes>
      <Route path="/" element={<ArticleList/>} />
      <Route path="/details/:article_id" element={<ArticlesDetails/>} />

    {/* <ArticleList/> */}
    {/* <ArticlesDetails/> */}
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
