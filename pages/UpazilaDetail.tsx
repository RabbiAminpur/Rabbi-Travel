
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { BD_DATA } from '../data.ts';
import Breadcrumbs from '../components/Breadcrumbs.tsx';

const UpazilaDetail: React.FC = () => {
  const { divId, distId, upaId } = useParams<{ divId: string, distId: string, upaId: string }>();
  const division = BD_DATA.divisions.find(d => d.id === divId);
  const district = division?.districts.find(d => d.id === distId);
  const upazila = district?.upazilas.find(u => u.id === upaId);

  if (!division || !district || !upazila) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="animate-fade-in">
      <Breadcrumbs items={[
        { label: division.name, path: `/division/${division.id}` },
        { label: district.name, path: `/division/${division.id}/district/${district.id}` },
        { label: upazila.name, path: `/division/${division.id}/district/${district.id}/upazila/${upazila.id}` }
      ]} />
      
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">{upazila.name} উপজেলা</h2>
        <p className="text-slate-500">নিম্নোক্ত স্থানে আপনি ভ্রমণ করতে পারেন:</p>
      </div>

      <div className="space-y-16">
        {upazila.places.map(place => (
          <div key={place.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 p-6 md:p-8 flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3 h-64 lg:h-auto overflow-hidden rounded-2xl shadow-inner">
              <img src={place.image} alt={place.name} className="w-full h-full object-cover" />
            </div>
            
            <div className="lg:w-2/3 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-4">{place.name}</h3>
                <div className="flex items-center text-slate-600 mb-6 bg-slate-50 w-fit px-4 py-2 rounded-full border border-slate-100">
                  <svg className="w-5 h-5 mr-2 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">{place.location}</span>
                </div>
                <p className="text-slate-700 leading-relaxed text-lg mb-8">{place.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpazilaDetail;
