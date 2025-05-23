import { useState, useEffect } from 'react';
import { Button } from '../ui/button';

const slides = [
  {
    id: 1,
    title: 'Best Shipping',
    highlight: 'Partner',
    category: 'LOGISTIC',
    description: 'Amet, tempus egestas facilisis volutpat viverra molestie lobortis posuere maecenas, molestie lobortis posuere maecenas. Eget sapien, gravida neque.',
    image: '/hero-1.avif'
  },
  {
    id: 2,
    title: 'Reliable Cargo',
    highlight: 'Services',
    category: 'SHIPPING',
    description: 'We provide comprehensive logistics solutions with global coverage and exceptional customer service for all your shipping needs.',
    image: '/hero-2.avif'
  },
  {
    id: 3,
    title: 'Global Logistics',
    highlight: 'Solutions',
    category: 'TRANSPORT',
    description: 'Our expert team ensures safe and timely delivery of your cargo with state-of-the-art tracking and management systems.',
    image: '/hero-3.avif'
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Background images - full width */}
      {slides.map((slide, index) => (
        <div
          key={`bg-${slide.id}`}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center right'
          }}
        />
      ))}
      
      {/* Overlay gradient for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
      
      <div className="relative h-[calc(100vh-68px)]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="max-w-screen-xl mx-auto h-full flex items-center px-4">
              <div className="flex flex-col md:flex-row h-full w-full">
                {/* Left content */}
                <div className="w-full md:w-1/2 py-12 flex flex-col justify-center z-20">
                  <div className="mb-3">
                    <span className="bg-yellow-500 text-black py-1 px-4 text-sm font-semibold">
                      {slide.category}
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                    {slide.title}{' '}
                    <span className="text-yellow-500 block">{slide.highlight}</span>
                  </h1>
                  <p className="text-gray-600 mb-8 max-w-lg">
                    {slide.description}
                  </p>
                  <div>
                    <Button variant="default" size="lg">
                      Discover More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Vertical text */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 hidden md:block">
          <div className="transform rotate-90 origin-left">
            <span className="tracking-widest text-xs font-semibold text-yellow-500">#CARGO LOGISTIC</span>
          </div>
        </div>
        
        {/* Slider controls */}
        <div className="absolute bottom-8 left-4 md:left-[calc(8.33%+1rem)] z-20 flex items-center">
          <div className="flex mr-6">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-6 h-1 mx-1 ${
                  index === currentSlide ? 'bg-yellow-500' : 'bg-gray-400'
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="flex items-center">
            <button
              onClick={prevSlide}
              className="w-10 h-10 flex items-center justify-center mr-1 border border-gray-300 hover:bg-yellow-500 hover:border-yellow-500 group"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 group-hover:text-black"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 flex items-center justify-center border border-gray-300 hover:bg-yellow-500 hover:border-yellow-500 group"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 group-hover:text-black"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 