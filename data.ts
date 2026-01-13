
import { AppData } from './types';

export const BD_DATA: AppData = {
  divisions: [
    {
      id: "dhaka",
      name: "ঢাকা",
      image: "https://images.unsplash.com/photo-1598425121287-f8313437149c?auto=format&fit=crop&w=800&q=80",
      districts: [
        {
          id: "dhaka-dist",
          name: "ঢাকা",
          upazilas: [
            {
              id: "lalbagh",
              name: "লালবাগ",
              places: [
                {
                  id: "lalbagh-fort",
                  name: "লালবাগ কেল্লা",
                  description: "মুঘল আমলের একটি ঐতিহাসিক নিদর্শন। এটি ১৬৭৮ সালে শাহজাদা মুহাম্মদ আজম কর্তৃক নির্মিত হয়।",
                  image: "https://images.unsplash.com/photo-1628151249767-422f98628006?auto=format&fit=crop&w=800&q=80",
                  location: "লালবাগ, ঢাকা",
                  mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.7533316666245!2d90.38562331536253!3d23.719811195826557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8d968f9edc9%3A0x6336e8494b2f293!2sLalbagh%20Fort!5e0!3m2!1sen!2sbd!4v1614521000000!5m2!1sen!2sbd",
                  gallery: [
                    "https://images.unsplash.com/photo-1628151249767-422f98628006?auto=format&fit=crop&w=400&q=80",
                    "https://images.unsplash.com/photo-1628151249767-422f98628006?auto=format&fit=crop&w=400&q=81"
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "chittagong",
      name: "চট্টগ্রাম",
      image: "https://images.unsplash.com/photo-1590603740183-980e7f6920eb?auto=format&fit=crop&w=800&q=80",
      districts: [
        {
          id: "coxs-bazar",
          name: "কক্সবাজার",
          upazilas: [
            {
              id: "coxs-bazar-sadar",
              name: "কক্সবাজার সদর",
              places: [
                {
                  id: "beach",
                  name: "কক্সবাজার সমুদ্র সৈকত",
                  description: "বিশ্বের দীর্ঘতম প্রাকৃতিক সমুদ্র সৈকত। এটি ১২০ কিলোমিটার দীর্ঘ।",
                  image: "https://images.unsplash.com/photo-1590603740183-980e7f6920eb?auto=format&fit=crop&w=800&q=80",
                  location: "কক্সবাজার সদর",
                  gallery: ["https://images.unsplash.com/photo-1590603740183-980e7f6920eb?auto=format&fit=crop&w=400&q=80"]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "sylhet",
      name: "সিলেট",
      image: "https://images.unsplash.com/photo-1622323891039-2a9c9b33a7e5?auto=format&fit=crop&w=800&q=80",
      districts: [
        {
          id: "sylhet-dist",
          name: "সিলেট",
          upazilas: [
            {
              id: "gowainghat",
              name: "গোয়াইনঘাট",
              places: [
                {
                  id: "jaflong",
                  name: "জাফলং",
                  description: "প্রাকৃতিক সৌন্দর্যের এক অপরূপ লীলাভূমি। পাহাড় আর পাথরের নদীর সমন্বয় এখানে চমৎকার।",
                  image: "https://images.unsplash.com/photo-1622323891039-2a9c9b33a7e5?auto=format&fit=crop&w=800&q=80",
                  location: "গোয়াইনঘাট, সিলেট",
                  gallery: []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "rajshahi",
      name: "রাজশাহী",
      image: "https://images.unsplash.com/photo-1616886439363-2337d12f6c91?auto=format&fit=crop&w=800&q=80",
      districts: []
    },
    {
      id: "khulna",
      name: "খুলনা",
      image: "https://images.unsplash.com/photo-1632761806306-03f3922e9603?auto=format&fit=crop&w=800&q=80",
      districts: []
    },
    {
      id: "barisal",
      name: "বরিশাল",
      image: "https://images.unsplash.com/photo-1616886439363-2337d12f6c91?auto=format&fit=crop&w=800&q=80",
      districts: []
    },
    {
      id: "rangpur",
      name: "রংপুর",
      image: "https://images.unsplash.com/photo-1598425121287-f8313437149c?auto=format&fit=crop&w=800&q=80",
      districts: []
    },
    {
      id: "mymensingh",
      name: "ময়মনসিংহ",
      image: "https://images.unsplash.com/photo-1598425121287-f8313437149c?auto=format&fit=crop&w=800&q=80",
      districts: []
    }
  ]
};
