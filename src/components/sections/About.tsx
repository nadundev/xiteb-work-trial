import { Button } from '../ui/button';

export function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Image grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 relative">
              {/* Main large image */}
              <div className="col-span-1 row-span-2 relative">
                <img
                  src="/about-1.avif"
                  alt="Logistics worker with clipboard"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              {/* Top right image */}
              <div className="relative">
                <img
                  src="/about-2.avif"
                  alt="Warehouse operations"
                  className="w-full h-38 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              {/* Bottom right with overlay */}
              <div className="relative">
                <img
                  src="/about-3.avif"
                  alt="Industrial equipment"
                  className="w-full h-38 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-white p-6 rounded-lg shadow-xl z-10">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold">15,350+</div>
                  <div className="text-sm font-medium">Clients Worldwide</div>
                </div>
              </div>
              
              {/* Decorative geometric shapes */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-500 rounded-lg z-0 opacity-80"></div>
              <div className="absolute bottom-16 -left-6 w-12 h-12 bg-yellow-500 rounded-lg z-0"></div>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                <img 
                  src="/assets/logo-dark.svg" 
                  alt="Square Logistics" 
                  className="inline-block h-12 lg:h-16 xl:h-20 w-auto"
                />
                <br />
                Around{' '}
                <span className="text-yellow-500">the World.</span>
              </h2>
            </div>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Square Logistics is the world&apos;s driving worldwide coordinations supplier — we uphold industry and exchange the worldwide trade of merchandise through land transport.
              </p>
              
              <p>
                Our worth added administrations guarantee the progression of products proceeds consistently and supply chains stay lean and streamlined for progress.
              </p>
            </div>
            
            <div className="pt-4">
              <Button 
                variant="outline"
                size="lg"
              >
                More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 