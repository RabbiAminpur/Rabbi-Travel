
import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { BD_DATA } from '../data.ts';
import Breadcrumbs from '../components/Breadcrumbs.tsx';

const DivisionDetail: React.FC = () => {
  const { divId } = useParams<{ divId: string }>();
  const division = BD_DATA.divisions.find(d => d.id === divId);

  useEffect(() => {
    if (division) {
      document.title = `${division.name} বিভাগ | মীর রাব্বি হোসেন`;
    }
  }, [division]);

  if (!division) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="animate-fade-in">
      <Breadcrumbs items={[{ label: division.name, path: `/division/${division.id}` }]} />
      
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-emerald-800 mb-4">{division.name} বিভাগ</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          {division.name} বিভাগের জেলাসমূহ নিচে দেওয়া হলো। আপনার পছন্দের জেলা নির্বাচন করুন।
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {division.districts.length > 0 ? (
          division.districts.map(district => (
            <Link 
              key={district.id} 
              to={`/division/${division.id}/district/${district.id}`}
              className="flex items-center justify-between p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-emerald-200 hover:shadow-md transition-all group"
            >
              <span className="text-xl font-medium text-slate-800 group-hover:text-emerald-700">{district.name}</span>
              <div className="bg-emerald-50 p-2 rounded-full text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-slate-400 italic">
            এই বিভাগের জন্য কোনো জেলা এখনও যুক্ত করা হয়নি।
          </div>
        )}
      </div>
    </div>
  );
};

export default DivisionDetail;
