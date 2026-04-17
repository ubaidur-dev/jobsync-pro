import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import JobCard from '../components/JobCard';
import { useJobs } from '../hooks/useJobs';
import { SlidersHorizontal } from 'lucide-react'; 

export default function Home() {
  const { jobs, bookmarks, toggleBookmark } = useJobs();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="animate-in fade-in duration-700">
      <div className="mb-16 text-center">
        <h2 className="text-5xl font-black text-slate-900 mb-6 italic uppercase tracking-tighter">
          Find your <span className="text-[#7c3aed]">next move</span>
        </h2>
        <p className="text-slate-500 font-medium text-xl mb-10 max-w-xl mx-auto leading-relaxed">
          Access thousands of high-paying jobs from world-class tech companies and scale-ups.
        </p>
        <SearchBar onSearch={setSearchTerm} />
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-8 pb-4 border-b border-slate-100">
          <SlidersHorizontal size={18} className="text-slate-400" />
          <p className="text-slate-400 font-bold text-sm uppercase tracking-[0.2em]">
            Showing {filteredJobs.length} Live Openings
          </p>
        </div>

        {filteredJobs.map(job => (
          <JobCard 
            key={job.id} 
            job={job} 
            isBookmarked={bookmarks.some(b => b.id === job.id)}
            onBookmark={toggleBookmark}
          />
        ))}
      </div>
    </div>
  );
}