import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyHeader from "./components/MyHeader";
import ArticleList from "./components/ArticlesList";
import ArticlesDetails from "./components/ArticlesDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyHeader />
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/details/:article_id" element={<ArticlesDetails />} />

          {/* <ArticleList/> */}
          {/* <ArticlesDetails/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
