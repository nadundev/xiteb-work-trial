export function Services() {
  const services = [
    {
      id: 1,
      title: 'Air Freight Services',
      description: 'At our Auto Service garage, we are fully appreciate how difficult occur it is for people to find.',
      image: '/services-1.avif',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Drone Services',
      description: 'These are unique and often they differ from one industry to the other. Our logistics expertise.',
      image: '/services-2.avif',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H4.5m2.25 0v3.75m0-3.75a1.875 1.875 0 0 1 1.875-1.875h1.5m0 0h7.5m0 0h1.5m0 0a1.875 1.875 0 0 1 1.875 1.875m0 0v3.75m0-3.75H21m-1.5 0H18v1.875m0 0v1.875m0 0v.375c0 .621-.504 1.125-1.125 1.125h-1.5m0 0h-7.5m0 0h-1.5m0 0a1.125 1.125 0 0 1-1.125-1.125v-.375m0 0V18m0 0v.375c0 .621.504 1.125 1.125 1.125H3.75" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-yellow-500 font-semibold mb-4 text-lg">
            Real Solution, Real Fast!
          </p>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
            Best Global Logistics Solutions.
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative group overflow-hidden rounded-2xl h-80 lg:h-96"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/60" />
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8 text-white">
                <div className="mb-6">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Read More Button */}
                  <button className="inline-flex items-center text-white hover:text-yellow-500 transition-colors duration-300 font-semibold">
                    <span className="mr-2">Read More</span>
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center group-hover:bg-yellow-500 transition-colors duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 text-white"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              
              {/* Icon */}
              <div className="absolute top-8 right-8">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white shadow-lg">
                  {service.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 