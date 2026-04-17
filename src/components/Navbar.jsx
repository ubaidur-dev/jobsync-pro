import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bookmark, PlusCircle } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-white border-b border-slate-100 px-8 py-4 flex justify-between items-center sticky top-0 z-50 shadow-sm shadow-slate-50/50">
      <Link to="/" className="flex items-center gap-2 group">
        {/* Placeholder for your Image (Logo/Heading/Slogan combo) */}
        <div className="h-12 w-48 bg-slate-100 rounded-xl flex items-center justify-center border border-dashed border-slate-200">
          <p className="text-slate-400 font-bold text-sm">Upload Logo Img</p>
        </div>
      </Link>
      
      <div className="flex gap-8 items-center font-bold text-sm text-slate-500">
        <Link to="/" className={`hover:text-[#7c3aed] transition-all ${location.pathname === '/' ? 'text-[#7c3aed]' : ''}`}>
          Find Jobs
        </Link>
        <Link to="/bookmarks" className={`flex items-center gap-2 hover:text-[#7c3aed] transition-all ${location.pathname === '/bookmarks' ? 'text-[#7c3aed]' : ''}`}>
          <Bookmark size={18}/> Saved
        </Link>
        <Link to="/post" className="bg-[#7c3aed] text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-purple-100 hover:scale-105 transition-all flex items-center gap-2">
          <PlusCircle size={18}/> Post a Job
        </Link>
      </div>
    </nav>
  );
}