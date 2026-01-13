
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { BD_DATA } from '../data';
import Breadcrumbs from '../components/Breadcrumbs';

const DistrictDetail: React.FC = () => {
  const { divId, distId } = useParams<{ divId: string, distId: string }>();
  const division = BD_DATA.divisions.find(d => d.id === divId);
  const district = division?.districts.find(d => d.id === distId);

  if (!division || !district) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="animate-fade-in">
      <Breadcrumbs items={[
        { label: division.name, path: `/division/${division.id}` },
        { label: district.name, path: `/division/${division.id}/district/${district.id}` }
      ]} />
      
      <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">{district.name} জেলা</h2>
          <p className="text-slate-500 mt-2">এই জেলার অন্তর্গত উপজেলাসমূহ ও পর্যটন কেন্দ্র:</p>
        </div>
        <div className="bg-white px-6 py-2 rounded-full shadow-sm text-emerald-700 font-bold border border-emerald-100">
          উপজেলা সংখ্যা: {district.upazilas.length}
        </div>
      </div>

      <div className="space-y-4 max-w-3xl">
        {district.upazilas.length > 0 ? (
          district.upazilas.map(upazila => (
            <Link 
              key={upazila.id} 
              to={`/division/${division.id}/district/${district.id}/upazila/${upazila.id}`}
              className="block p-5 bg-white rounded-lg border border-slate-100 hover:bg-emerald-50 transition-colors group"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-lg font-bold text-slate-800">{upazila.name} উপজেলা</h4>
                  <p className="text-sm text-slate-500 mt-1">পর্যটন কেন্দ্র দেখতে ক্লিক করুন</p>
                </div>
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded text-xs poppins font-bold">VIEW PLACES</span>
              </div>
            </Link>
          ))
        ) : (
          <div className="p-8 text-center text-slate-400 bg-white rounded-lg border border-dashed border-slate-200">
            এই জেলার জন্য কোনো উপজেলা তথ্য এখনও নেই।
          </div>
        )}
      </div>
    </div>
  );
};

export default DistrictDetail;
