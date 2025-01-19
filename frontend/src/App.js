//react imports
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components import
import Header from './components/Header/Header.component.jsx';
import Footer from "./components/footer/Footer";
import Authors from "./views/Authors.view";
import AuthorDetails from './views/Authordetails.view.jsx';
import NewAuthor from "./views/NewAuthor.view.jsx";
import BlogList from "./views/BlogList.view.jsx";
import BlogDetail from "./views/BlogDetail.view.jsx";

function App() {
  return (  
    <>
    <Router>
  <Header />
    <Routes>
        <Route path="/" element={<BlogList/>} />
        <Route path="/:page" element={<BlogList/>} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/Authors/:id" element={<AuthorDetails/>} />
        <Route path="/new-authors" element={<NewAuthor/>} />
        <Route path="/blog/:id" element={<BlogDetail/>} /> 
        <Route path="*" element={<div>404</div>} /> 
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
