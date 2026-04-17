import React from 'react';
import { useJobs } from '../hooks/useJobs';
import JobCard from '../components/JobCard';
import { Link } from 'react-router-dom';

export default function Bookmarks() {
  const { bookmarks, toggleBookmark } = useJobs();

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-5xl font-black text-slate-900 mb-12 italic uppercase tracking-tighter">
        Your <span className="text-slate-300">Bookmarks</span>
      </h2>

      {bookmarks.length > 0 ? (
        <div className="space-y-4">
          {bookmarks.map(job => (
            <JobCard 
              key={job.id} 
              job={job} 
              isBookmarked={true}
              onBookmark={toggleBookmark}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white p-20 rounded-[40px] text-center border-2 border-dashed border-slate-100">
          <p className="text-slate-400 font-bold text-xl mb-6 italic">No jobs saved yet.</p>
          <Link to="/" className="btn-purple inline-block">Explore Jobs</Link>
        </div>
      )}
    </div>
  );
}