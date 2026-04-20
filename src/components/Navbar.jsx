import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '/public/logo.png';
import { Bookmark, PlusCircle } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-white border-b border-slate-100 px-8 py-4 flex justify-between items-center sticky top-0 z-50 shadow-sm shadow-slate-50/50">
      <Link to="/" className="flex items-center gap-2 group">
        <div className="h-12 w-48 flex items-center justify-start group">
  <img 
    src="/logo.png" 
    alt="JobSync Pro Logo" 
    className="h-full w-auto object-contain hover:scale-105 transition-transform duration-300"
  />
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