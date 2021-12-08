import React from "react";
import { Route, Routes } from "react-router-dom";
import People from "./People";
import Book from "./Book";
import Article from "./Article";
import App from "./App";

function Main() {
  return (
    <div className="main">
      <Routes>
        <Route path="/people" element={<People />} />
        <Route path="/books" element={<Book />} />
        <Route path="/articles" element={<Article />} />
      </Routes>
    </div>
  );
}

export default Main;
