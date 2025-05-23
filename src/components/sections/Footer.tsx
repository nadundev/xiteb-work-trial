import React, { useState } from 'react';

const latestNews = [
  {
    id: 1,
    title: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
    timeAgo: '5 Minutes Ago'
  },
  {
    id: 2,
    title: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
    timeAgo: '5 Minutes Ago'
  }
];

const customerServiceLinks = [
  'Support Forums',
  'Communication', 
  'FAQS',
  'Privacy Policy',
  'Rules & Condition',
  'Contact Us'
];

const galleryImages = [
  '/news-1.avif',
  '/about-2.avif', 
  '/services-1.avif',
  '/services-2.avif',
  '/hero-1.avif',
  '/hero-2.avif'
];

export function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe:', email);
    setEmail('');
  };

  return (
    <footer id="contact" className="text-white" style={{ backgroundColor: '#101010' }}>
      {/* Newsletter Section */}
      <div className="py-12" style={{ backgroundColor: '#1c1c1c' }}>
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold mb-2">Weekly Newsletter</h3>
              <p className="text-slate-300">
                There are many variations of passages of lorem ipsum available.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto lg:min-w-[400px]">
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Mail"
                  className="flex-1 px-4 py-3 rounded bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded transition-colors duration-300 whitespace-nowrap"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* About Us */}
            <div>
              <div className="mb-6">
                <img 
                  src="/assets/logo-white.svg" 
                  alt="Company Logo" 
                  className="h-12 w-auto mb-4"
                />
                <div className="w-12 h-1 bg-yellow-500 mb-4"></div>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center text-slate-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-3 text-yellow-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  +1 (494) 11 434 7575
                </div>
                <div className="flex items-start text-slate-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-3 mt-0.5 text-yellow-500 flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  42 Lily Ave, Colombo 00600
                </div>
              </div>
            </div>

            {/* Latest News */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Latest News</h4>
              <div className="w-12 h-1 bg-yellow-500 mb-6"></div>
              
              <div className="space-y-6">
                {latestNews.map((news) => (
                  <div key={news.id}>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <p className="text-slate-300 text-sm leading-relaxed mb-2">
                          {news.title}
                        </p>
                        <span className="text-slate-400 text-xs">{news.timeAgo}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Customer Service</h4>
              <div className="w-12 h-1 bg-yellow-500 mb-6"></div>
              
              <ul className="space-y-3">
                {customerServiceLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-slate-300 hover:text-yellow-500 transition-colors duration-300 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gallery */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Gallery</h4>
              <div className="w-12 h-1 bg-yellow-500 mb-6"></div>
              
              <div className="grid grid-cols-3 gap-2">
                {galleryImages.map((image, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded group cursor-pointer">
                    <img
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-600 py-6">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-slate-400 text-sm">
              Copyright © 2024 All Rights Reserved. Site By <span className="text-yellow-500">Xiteb®</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <a href="#" className="w-10 h-10 bg-slate-600 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors duration-300 group">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-600 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors duration-300 group">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-600 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors duration-300 group">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
              
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 