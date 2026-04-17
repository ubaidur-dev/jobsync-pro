import React from 'react';
import { Bookmark, MapPin, Building2, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function JobCard({ job, isBookmarked, onBookmark }) {
  return (
    <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-lg transition-all mb-6 flex justify-between items-center group relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1.5 h-full bg-[#7c3aed] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

      <div className="flex-1">
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-purple-50 text-[#7c3aed] px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">{job.type}</span>
          <span className="text-slate-400 text-[10px] font-medium uppercase tracking-widest">{job.salary}</span>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#7c3aed] transition-colors">{job.title}</h3>
        <div className="flex gap-6 text-slate-500 font-medium text-sm">
          <span className="flex items-center gap-1.5"><Building2 size={16}/> {job.company}</span>
          <span className="flex items-center gap-1.5"><MapPin size={16}/> {job.location}</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button onClick={() => onBookmark(job)} className={`p-3 rounded-xl transition-all ${isBookmarked ? 'bg-[#7c3aed] text-white' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}>
          <Bookmark size={20} fill={isBookmarked ? "currentColor" : "none"}/>
        </button>
        <Link to={`/job/${job.id}`} className="btn-purple !text-base !font-semibold !px-10 !py-4">View Job</Link>
      </div>
    </div>
  );
}