import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, PlusCircle } from 'lucide-react';

export default function PostJob() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: '', company: '', location: '', salary: '', type: 'Full-time', desc: '', reqs: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Submitting job:", form); 
    setTimeout(() => {
      setSubmitted(false);
      navigate('/'); 
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto py-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-400 hover:text-[#7c3aed] font-bold mb-8 transition-all hover:-translate-x-1">
        <ArrowLeft size={20}/> Back
      </button>

      <div className="bg-white rounded-[40px] p-12 border border-slate-100 shadow-2xl shadow-slate-200/50">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Post a <span className="text-[#7c3aed]">New Job</span></h2>
        <p className="text-slate-500 font-medium text-lg mb-12">Access thousands of high-quality developers by posting your opening on JobSync Pro.</p>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <input required placeholder="Job Title (e.g. Senior React Developer)" className="w-full px-6 py-4 rounded-xl border border-slate-100 font-medium" onChange={(e) => setForm({...form, title: e.target.value})}/>
            <input required placeholder="Company Name" className="w-full px-6 py-4 rounded-xl border border-slate-100 font-medium" onChange={(e) => setForm({...form, company: e.target.value})}/>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <input required placeholder="Location (e.g. Remote Worldwide or Karachi, PK)" className="w-full px-6 py-4 rounded-xl border border-slate-100 font-medium" onChange={(e) => setForm({...form, location: e.target.value})}/>
            <input required placeholder="Salary Range (e.g. $120k - $150k)" className="w-full px-6 py-4 rounded-xl border border-slate-100 font-medium" onChange={(e) => setForm({...form, salary: e.target.value})}/>
          </div>
          <select className="w-full px-6 py-4 rounded-xl border border-slate-100 font-medium text-slate-500" onChange={(e) => setForm({...form, type: e.target.value})}>
            <option>Full-time</option><option>Contract</option><option>Part-time</option><option>Internship</option>
          </select>
          <textarea required placeholder="Job Description (Detailed overview of role)" rows={6} className="w-full px-6 py-4 rounded-xl border border-slate-100 font-medium" onChange={(e) => setForm({...form, desc: e.target.value})}></textarea>
          <textarea required placeholder="Requirements (List key skills/exp, separated by commas)" rows={4} className="w-full px-6 py-4 rounded-xl border border-slate-100 font-medium" onChange={(e) => setForm({...form, reqs: e.target.value})}></textarea>
          
          <button type="submit" className={`btn-purple flex items-center gap-2 ${submitted ? 'opacity-50' : ''}`} disabled={submitted}>
            {submitted ? 'Job Submitting...' : <><PlusCircle size={20}/> Post this Job</>}
          </button>
        </form>
      </div>
    </div>
  );
}