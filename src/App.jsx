import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Bookmarks from './pages/Bookmarks';
import JobDetail from './pages/JobDetail';
import PostJob from './pages/PostJob';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F8FAFC]">
        <Navbar />
        <main className="max-w-5xl mx-auto py-12 px-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/job/:id" element={<JobDetail />} />
            <Route path="/post" element={<PostJob />} />
          </Routes>
        </main>

        <footer className="mt-20 py-12 border-t border-slate-100 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-slate-400 font-bold text-sm tracking-widest uppercase">
              © 2026 JobSync Pro • All Rights Reserved
            </p>
            <p className="mt-2 text-slate-900 font-black italic text-lg tracking-tight">
              Developed Professionally by <span className="text-[#7c3aed]">Ubaid Ur Rehman</span>
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}