import { React } from 'react';
import { createRoot } from 'react-dom/client';
import {
  HashRouter as Router, Route, Redirect, Routes,
} from 'react-router-dom';
import App from './App';
import Album from './components/Ablum';
import NavBar from './components/NavBar';
import Community from './components/Community';

const root = createRoot(document.getElementById('root'));
root.render(
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/album" element={<Album />} />
      <Route path="/community" element={<Community />} />
    </Routes>
  </Router>,
);
