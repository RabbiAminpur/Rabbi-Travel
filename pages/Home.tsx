
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BD_DATA } from '../data.ts';

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDivisions = BD_DATA.divisions.filter(div => 
    div.name.includes(searchTerm)
  );

  return (
    <div className="space-y-12 animate-fade-in">
      <section className="relative rounded-3xl overflow-hidden bg-emerald-700 text-white p-8 md:p-16 text-center">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1590603740183-980e7f6920eb?auto=format&fit=crop&w=1200&q=80" 
            className="w-full h-full object-cover" 
            alt="Bangladesh Landscape" 
          />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            বাংলাদেশের সকল দর্শনীয় স্থান এক জায়গায়
          </h2>
          <p className="text-emerald-50 text-lg opacity-90">
            আপনার পছন্দের বিভাগ বা জেলা নির্বাচন করে ঘুরতে যাওয়ার পরিকল্পনা করুন।
          </p>
          
          <div className="relative max-w-md mx-auto">
            <input 
              type="text" 
              placeholder="বিভাগ খুঁজুন..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 rounded-full text-slate-900 focus:ring-4 focus:ring-emerald-400 outline-none transition-all shadow-lg text-lg"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-bold text-slate-800 border-l-4 border-emerald-600 pl-4">বিভাগসমূহ</h3>
          <span className="text-slate-500 poppins text-sm">{BD_DATA.divisions.length} Divisions</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDivisions.map((division) => (
            <Link 
              key={division.id} 
              to={`/division/${division.id}`}
              className="group relative overflow-hidden rounded-2xl shadow-md bg-white hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={division.image} 
                  alt={division.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
                  {division.name}
                </h4>
                <p className="text-sm text-slate-500 mt-1">ক্লিক করুন বিস্তারিত দেখতে</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
