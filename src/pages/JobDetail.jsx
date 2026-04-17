import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useJobs } from '../hooks/useJobs';
import { ArrowLeft, Building2, MapPin, DollarSign, CheckCircle } from 'lucide-react';

export default function JobDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { jobs } = useJobs();
  const job = jobs.find(j => j.id === parseInt(id));

  if (!job) return <div className="p-20 text-center font-bold text-slate-400 text-2xl">Job detail loading...</div>;

  return (
    <div className="max-w-4xl mx-auto py-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center gap-2 text-slate-400 hover:text-[#7c3aed] font-bold mb-8 transition-all hover:-translate-x-1"
      >
        <ArrowLeft size={20}/> Back to Openings
      </button>

      <div className="bg-white rounded-[40px] p-12 border border-slate-100 shadow-2xl shadow-slate-200/50">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
          <div className="flex-1">
            <span className="bg-purple-50 text-[#7c3aed] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
              {job.type}
            </span>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">{job.title}</h1>
            <div className="flex flex-wrap gap-6 text-slate-500 font-semibold text-sm">
              <span className="flex items-center gap-2"><Building2 size={18} className="text-[#7c3aed]"/> {job.company}</span>
              <span className="flex items-center gap-2"><MapPin size={18} className="text-[#7c3aed]"/> {job.location}</span>
              <span className="flex items-center gap-2 text-emerald-600"><DollarSign size={18}/> {job.salary}</span>
            </div>
          </div>
          <button className="bg-[#7c3aed] text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-purple-200 hover:scale-105 active:scale-95 transition-all w-full md:w-auto">
            Apply Now
          </button>
        </div>

        <div className="border-t border-slate-50 pt-12">
          <h3 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tighter">About the Role</h3>
          <p className="text-slate-600 leading-relaxed text-lg mb-12">{job.desc}</p>
          
          <h3 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Requirements</h3>
          <ul className="space-y-4">
            {job.reqs.map((req, index) => (
              <li key={index} className="flex items-start gap-3 text-slate-600 font-medium text-lg">
                <CheckCircle size={24} className="text-emerald-500 shrink-0 mt-0.5"/>
                {req}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}