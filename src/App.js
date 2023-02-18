import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout"
import Profile from "./pages/Profile"
import NoPage from "./pages/NoPage"
import Contact from "./pages/Contact"
import Project from "./pages/Projects"
import Header from "./pages/Header";
import Admin from './pages/Admin';
import AdminPanel from './pages/AdminPanel';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Header />} />
          <Route path="profile" element={<Profile />} />
          <Route path="projects" element={<Project />} />
          <Route path="contact" element={<Contact />} />
          <Route path="admin" element={<Admin />} />
          <Route path="adminPanel" element={<AdminPanel />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
