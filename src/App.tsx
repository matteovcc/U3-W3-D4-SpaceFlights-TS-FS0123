import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MyHeader from './components/MyHeader';
import ArticleList from './components/ArticlesList';

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
    <MyHeader />
    <ArticleList/>
    </>
  );
}

export default App;
