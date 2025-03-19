// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import Header from "../components/Header.jsx";
import { Route, Routes } from "react-router-dom";
import NotFound from "../components/notFound.jsx";
import Home from "../pages/Home.jsx";
import Blog from "../pages/Blog.jsx";
import Teams from "../pages/Teams.jsx";
import Services from "../pages/Services.jsx";
import Create from "../components/crud/Create";
import Edit from "../components/crud/Edit.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/services" element={<Services />} />
        {/* CRUD Routes */}
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
