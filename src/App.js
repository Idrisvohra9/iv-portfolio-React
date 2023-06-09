import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout"
import Profile from "./pages/Profile"
import NoPage from "./pages/NoPage"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects.jsx"
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import AdminPanel from "./pages/AdminPanel";
import ViewDataProj from './pages/ViewDataProj';
import AddProject from './pages/AddProject';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="admin" element={<Admin />} />
        <Route path="admin/dashboard/:token/" element={<AdminPanel />} >
          <Route index exact element={<ViewDataProj />} />
          <Route path=":request" element={<AddProject />} />
        </Route>
        <Route path="*" element={<NoPage />} />
        <Route index element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
