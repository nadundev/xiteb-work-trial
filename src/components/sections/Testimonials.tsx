import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    content: "Integer congue elit non semper laoreet sed lectus orci posuer nisl tempor se felis ac mauris. Pellentesque rhyd urna. Integer vitae felis vel magna posu du vestibulum. Nam rutrum congue diam. Aliquam malesuada mauris etug met curabatur laoreet convallis nisal pellentesque bibendum.",
    author: "JOHN DEO",
    position: "Managing Director"
  },
  {
    id: 2,
    content: "Exceptional service and reliability. Their logistics solutions have transformed our supply chain operations. Professional team with extensive industry knowledge and commitment to excellence.",
    author: "SARAH CHEN",
    position: "Operations Manager"
  },
  {
    id: 3,
    content: "Outstanding customer service and delivery performance. They consistently exceed our expectations with their innovative approach to cargo management and timely delivery solutions.",
    author: "MICHAEL BROWN",
    position: "Supply Chain Director"
  }
];

const faqItems = [
  {
    id: 1,
    question: "Dui ac hendrerit elementum quam ipsum auctor lorem",
    answer: "We provide comprehensive logistics solutions including air freight, sea freight, land transport, and specialized cargo handling services tailored to your business needs."
  },
  {
    id: 2,
    question: "Mauris vel magna a est lobortis volutpat",
    answer: "Our global network spans across 137 countries with strategic partnerships and local expertise to ensure reliable delivery worldwide."
  },
  {
    id: 3,
    question: "Sed bibendum ornare lorem mauris feugiat suspendisse neque",
    answer: "We utilize advanced tracking technology and real-time monitoring systems to provide complete visibility of your shipments throughout the delivery process."
  },
  {
    id: 4,
    question: "Nulla scelerisque dui hendrerit elementum quam",
    answer: "Our experienced team provides 24/7 customer support and dedicated account management to ensure seamless logistics operations."
  }
];

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - Testimonials */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Trusted Clients
              </h2>
              <p className="text-gray-500 text-base">
                What our clients say about us
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-8 relative">
              {/* Quote icon */}
              <div className="absolute top-6 left-6">
                <div className="w-12 h-12 bg-yellow-500 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-white"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                </div>
              </div>

              {/* Testimonial content */}
              <div className="pt-16 pb-8">
                <p className="text-gray-700 leading-relaxed mb-8">
                  {testimonials[currentTestimonial].content}
                </p>
                
                <div className="flex items-center justify-between">
                  {/* Navigation */}
                  <div className="flex space-x-2">
                    <button
                      onClick={prevTestimonial}
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 hover:bg-gray-200 transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 hover:bg-gray-200 transition-colors"
                      aria-label="Next testimonial"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  {/* Author */}
                  <div className="text-right">
                    <div className="font-bold text-gray-900">
                      {testimonials[currentTestimonial].author}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonials[currentTestimonial].position}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - FAQ / Why Choose Us */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Why Choose Us
              </h2>
              <p className="text-gray-500 text-base">
                What our clients say about us
              </p>
            </div>

            <div className="space-y-4">
              {faqItems.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(item.id)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-gray-700 font-medium pr-4">
                      {item.question}
                    </span>
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 bg-gray-800 text-white flex items-center justify-center text-sm font-bold">
                        {openFaq === item.id ? '−' : '+'}
                      </div>
                    </div>
                  </button>
                  
                  {openFaq === item.id && (
                    <div className="px-4 pb-4 text-gray-600 leading-relaxed">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 