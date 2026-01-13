
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, logic to send email or store data would go here
  };

  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">আমাদের সাথে যোগাযোগ করুন</h2>
        <p className="text-slate-600">আপনার কোনো মতামত বা তথ্য থাকলে আমাদের জানান।</p>
      </div>

      {submitted ? (
        <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-3xl text-center space-y-4">
          <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl">✓</div>
          <h3 className="text-2xl font-bold text-emerald-900">ধন্যবাদ!</h3>
          <p className="text-emerald-800">আপনার বার্তাটি আমরা সফলভাবে গ্রহণ করেছি। খুব শীঘ্রই আমরা আপনার সাথে যোগাযোগ করব।</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-emerald-700 font-bold underline"
          >
            আরেকটি বার্তা পাঠান
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-600 block">আপনার নাম</label>
            <input 
              required
              type="text" 
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-emerald-200 outline-none transition-all"
              placeholder="যেমন: মীর রাব্বি হোসেন"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-600 block">ইমেইল ঠিকানা</label>
            <input 
              required
              type="email" 
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-emerald-200 outline-none transition-all poppins"
              placeholder="example@mail.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-600 block">আপনার বার্তা</label>
            <textarea 
              required
              rows={5}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-emerald-200 outline-none transition-all"
              placeholder="এখানে বিস্তারিত লিখুন..."
            ></textarea>
          </div>
          <button 
            type="submit"
            className="w-full bg-emerald-600 text-white font-bold py-4 rounded-xl hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-200"
          >
            বার্তা পাঠান
          </button>
        </form>
      )}

      <div className="mt-12 text-center text-slate-500 poppins text-sm uppercase tracking-widest">
        Design and Developed by Rabbi Hossain
      </div>
    </div>
  );
};

export default Contact;
