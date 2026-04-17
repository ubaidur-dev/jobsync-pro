import React from 'react';
import { Search as SearchIcon } from 'lucide-react';

export default function SearchBar({ onSearch }) {
  return (
    <div className="max-w-2xl mx-auto relative group mb-12">
      <SearchIcon className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#7c3aed] transition-colors" size={24}/>
      <input 
        type="text" 
        placeholder="Search by role, company or location..." 
        className="w-full pl-16 pr-8 py-6 bg-white rounded-[32px] border-none shadow-2xl shadow-slate-200/50 focus:ring-4 focus:ring-purple-100 transition-all font-bold text-lg outline-none"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}