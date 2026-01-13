
import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BD_DATA } from '../data.ts';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  
  // Search Box State
  const [selectedDiv, setSelectedDiv] = useState('');
  const [selectedDist, setSelectedDist] = useState('');
  const [selectedUpa, setSelectedUpa] = useState('');

  const filteredDivisions = BD_DATA.divisions.filter(div => 
    div.name.includes(searchTerm)
  );

  // Derived data for search selects
  const districts = useMemo(() => {
    if (!selectedDiv) return [];
    return BD_DATA.divisions.find(d => d.id === selectedDiv)?.districts || [];
  }, [selectedDiv]);

  const upazilas = useMemo(() => {
    if (!selectedDist) return [];
    return districts.find(d => d.id === selectedDist)?.upazilas || [];
  }, [selectedDist, districts]);

  const handleSearchGo = () => {
    if (selectedDiv && selectedDist && selectedUpa) {
      navigate(`/division/${selectedDiv}/district/${selectedDist}/upazila/${selectedUpa}`);
    } else {
      alert('অনুগ্রহ করে বিভাগ, জেলা এবং উপজেলা নির্বাচন করুন।');
    }
  };

  return (
    <div className="space-y-16 animate-fade-in">
      {/* Hero Section */}
      <section className="relative rounded-[2rem] overflow-hidden bg-emerald-800 text-white p-10 md:p-20 text-center shadow-2xl">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1590603740183-980e7f6920eb?auto=format&fit=crop&w=1200&q=80" 
            className="w-full h-full object-cover" 
            alt="Bangladesh Landscape" 
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              অপরূপ বাংলাদেশের <br/> <span className="text-emerald-300">ভ্রমণ গাইড</span>
            </h2>
            <p className="text-emerald-100 text-lg md:text-xl opacity-90 max-w-xl mx-auto">
              বিভাগ, জেলা ও উপজেলা ভিত্তিক নিখুঁত তথ্যের মাধ্যমে খুঁজে নিন আপনার পরবর্তী ভ্রমণের স্থান।
            </p>
          </div>
          
          <div className="relative max-w-lg mx-auto group">
            <input 
              type="text" 
              placeholder="পছন্দের বিভাগ খুঁজুন..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-8 py-4 rounded-2xl text-slate-900 focus:ring-4 focus:ring-emerald-400 outline-none transition-all shadow-2xl text-lg border-2 border-transparent focus:border-emerald-300"
            />
            <svg className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 group-focus-within:text-emerald-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Area Search Section (Interactive Finder) */}
      <section className="relative -mt-20 z-20 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-emerald-50">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-emerald-100 p-2 rounded-lg">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-800">এলাকা খুঁজুন</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Division Select */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-500 ml-1">বিভাগ</label>
              <select 
                value={selectedDiv}
                onChange={(e) => {
                  setSelectedDiv(e.target.value);
                  setSelectedDist('');
                  setSelectedUpa('');
                }}
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition-all cursor-pointer appearance-none text-slate-700 font-medium"
              >
                <option value="">বিভাগ নির্বাচন করুন</option>
                {BD_DATA.divisions.map(div => (
                  <option key={div.id} value={div.id}>{div.name}</option>
                ))}
              </select>
            </div>

            {/* District Select */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-500 ml-1">জেলা</label>
              <select 
                disabled={!selectedDiv}
                value={selectedDist}
                onChange={(e) => {
                  setSelectedDist(e.target.value);
                  setSelectedUpa('');
                }}
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-slate-700 font-medium"
              >
                <option value="">জেলা নির্বাচন করুন</option>
                {districts.map(dist => (
                  <option key={dist.id} value={dist.id}>{dist.name}</option>
                ))}
              </select>
            </div>

            {/* Upazila Select */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-500 ml-1">উপজেলা</label>
              <select 
                disabled={!selectedDist}
                value={selectedUpa}
                onChange={(e) => setSelectedUpa(e.target.value)}
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-slate-700 font-medium"
              >
                <option value="">উপজেলা নির্বাচন করুন</option>
                {upazilas.map(upa => (
                  <option key={upa.id} value={upa.id}>{upa.name}</option>
                ))}
              </select>
            </div>

            {/* Go Button */}
            <div className="flex items-end">
              <button 
                onClick={handleSearchGo}
                className="w-full bg-emerald-600 text-white font-bold py-4 px-8 rounded-2xl hover:bg-emerald-700 transition-all shadow-xl hover:shadow-emerald-200 active:scale-95 flex items-center justify-center group"
              >
                তথ্য দেখুন
                <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Divisions Section - Guaranteed 2 columns on large screens */}
      <section className="px-2">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-slate-800 border-l-8 border-emerald-600 pl-6 leading-none">বিভাগসমূহ</h3>
            <p className="text-slate-500 pl-6">বাংলাদেশের ৮টি প্রশাসনিক বিভাগ ও তাদের রূপলাবণ্য</p>
          </div>
          <div className="bg-emerald-50 text-emerald-700 px-6 py-2 rounded-full font-bold poppins text-sm border border-emerald-100">
            {filteredDivisions.length} DIVISIONS FOUND
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredDivisions.map((division) => (
            <Link 
              key={division.id} 
              to={`/division/${division.id}`}
              className="group flex flex-col sm:flex-row bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-emerald-100 hover:-translate-y-2 h-full"
            >
              <div className="sm:w-[45%] h-64 sm:h-auto overflow-hidden relative">
                <img 
                  src={division.image} 
                  alt={division.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-8 sm:w-[55%] flex flex-col justify-center bg-white">
                <h4 className="text-3xl font-bold text-slate-800 group-hover:text-emerald-700 transition-colors mb-3">
                  {division.name}
                </h4>
                <p className="text-slate-500 leading-relaxed mb-6">
                  {division.name} বিভাগের প্রাকৃতিক এবং ঐতিহাসিক স্থানগুলো সম্পর্কে জানতে ক্লিক করুন।
                </p>
                <div className="flex items-center text-emerald-600 font-bold uppercase tracking-wider text-sm poppins group-hover:gap-2 transition-all">
                  EXPLORE NOW
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Feature Section */}
      <section className="bg-gradient-to-br from-slate-900 to-emerald-950 rounded-[3rem] p-10 md:p-20 text-white flex flex-col lg:flex-row items-center gap-12 overflow-hidden relative shadow-2xl">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 -top-20 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl"></div>
        
        <div className="flex-1 space-y-8 relative z-10">
          <div className="inline-block bg-emerald-500/20 text-emerald-400 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-emerald-500/30">
            Heritage & Nature
          </div>
          <h3 className="text-3xl md:text-5xl font-bold leading-tight">বাংলাদেশের সৌন্দর্য <br/> আপনার হাতের মুঠোয়</h3>
          <p className="text-slate-300 text-lg leading-relaxed opacity-80">
            আমাদের লক্ষ্য পর্যটন শিল্পের বিকাশ এবং ভ্রমণ পিপাসুদের জন্য একটি নির্ভরযোগ্য গাইড তৈরি করা। সহজ নেভিগেশন এবং সঠিক তথ্যের মাধ্যমে আপনার ভ্রমণ হোক আনন্দময়।
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/about" className="bg-white text-emerald-900 font-bold px-10 py-4 rounded-2xl hover:bg-emerald-50 transition-colors shadow-lg shadow-white/5">
              বিস্তারিত জানুন
            </Link>
            <Link to="/contact" className="bg-emerald-700/50 text-white font-bold px-10 py-4 rounded-2xl hover:bg-emerald-700 transition-colors border border-emerald-600">
              যোগাযোগ করুন
            </Link>
          </div>
        </div>
        <div className="flex-1 w-full relative z-10">
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1622323891039-2a9c9b33a7e5?auto=format&fit=crop&w=400&q=80" className="rounded-2xl shadow-2xl translate-y-6" alt="Nature" />
            <img src="https://images.unsplash.com/photo-1598425121287-f8313437149c?auto=format&fit=crop&w=400&q=80" className="rounded-2xl shadow-2xl -translate-y-6" alt="Heritage" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
