import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout"
import Profile from "./pages/Profile"
import NoPage from "./pages/NoPage"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects.jsx"
import Header from "./pages/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NoPage />} />
        <Route index element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
