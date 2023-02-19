import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout"
import Profile from "./pages/Profile"
import NoPage from "./pages/NoPage"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects.jsx"
import Header from "./pages/Header";
import Admin from './pages/Admin';
import AdminPanel from './pages/AdminPanel';
import AddProjects from "./pages/components/AddProject";
import ShowProjects from "./pages/components/ViewDataProj";

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
        <Route path="admin" element={<Admin />} />
        <Route path="adminPanel" element={<AdminPanel />} >
          <Route index path="showProjects" element={<ShowProjects />} />
          <Route path="addProjects" element={<AddProjects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
