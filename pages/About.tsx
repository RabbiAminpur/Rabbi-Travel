
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
      <section className="text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 poppins">About Bangladesh</h2>
        <div className="h-1 w-20 bg-emerald-600 mx-auto rounded-full"></div>
      </section>

      <section className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12 space-y-6">
        <h3 className="text-2xl font-bold text-emerald-800">বাংলাদেশের পর্যটন: এক অমূল্য সম্পদ</h3>
        <p className="text-slate-700 leading-relaxed text-lg">
          দক্ষিণ এশিয়ার একটি ছোট কিন্তু বৈচিত্র্যময় দেশ বাংলাদেশ। এর উত্তরে হিমালয়ের পাদদেশ, পূর্বে মেঘালয় ও ত্রিপুরার পাহাড় এবং দক্ষিণে বঙ্গোপসাগরের বিশাল জলরাশি। বাংলাদেশের পর্যটন মূলত এর প্রাকৃতিক সৌন্দর্য, ঐতিহাসিক নিদর্শন এবং সমৃদ্ধ সংস্কৃতির ওপর ভিত্তি করে গড়ে উঠেছে।
        </p>
        <p className="text-slate-700 leading-relaxed text-lg">
          আমাদের এই ওয়েবসাইটের মূল লক্ষ্য হলো বাংলাদেশের সকল দর্শনীয় স্থানগুলোকে ডিজিটাল মাধ্যমে সাধারণ মানুষের কাছে পৌঁছে দেওয়া। আমরা বিভাগ, জেলা ও উপজেলা ভিত্তিক তথ্য সাজিয়েছি যাতে আপনি সহজেই আপনার পরবর্তী ভ্রমণের গন্তব্য খুঁজে পেতে পারেন।
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-sky-50 p-6 rounded-2xl border border-sky-100">
            <h4 className="font-bold text-sky-900 text-xl mb-3">আমাদের লক্ষ্য</h4>
            <ul className="space-y-2 text-sky-800">
              <li>• পর্যটন কেন্দ্রগুলোর সঠিক তথ্য প্রদান।</li>
              <li>• নতুন পর্যটন কেন্দ্রগুলোকে বিশ্বের কাছে তুলে ধরা।</li>
              <li>• ভ্রমণ পিপাসুদের সাহায্য করা।</li>
            </ul>
          </div>
          <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
            <h4 className="font-bold text-emerald-900 text-xl mb-3">কেন আমাদের ব্যবহার করবেন?</h4>
            <ul className="space-y-2 text-emerald-800">
              <li>• সম্পূর্ণ ফ্রি ও সহজ নেভিগেশন।</li>
              <li>• মোবাইল ফ্রেন্ডলি ডিজাইন।</li>
              <li>• বিভাগ থেকে উপজেলা পর্যন্ত নির্ভুল তথ্য।</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
