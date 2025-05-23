const brands = [
  {
    id: 1,
    name: 'REUSS',
    subtitle: 'SEO COMPANY',
    logo: (
      <div className="flex items-center space-x-3">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="8" width="12" height="8" fill="#9CA3AF" transform="rotate(45 8 12)"/>
          <rect x="20" y="8" width="12" height="8" fill="#9CA3AF" transform="rotate(45 26 12)"/>
          <rect x="11" y="20" width="12" height="8" fill="#9CA3AF" transform="rotate(45 17 24)"/>
        </svg>
        <div>
          <div className="text-lg font-bold text-gray-600">REUSS</div>
          <div className="text-xs text-gray-400">SEO COMPANY</div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    name: 'GENESIS',
    logo: (
      <div className="text-xl font-bold text-gray-600 tracking-wider">
        GENESIS
      </div>
    )
  },
  {
    id: 3,
    name: 'INTEGRIO.CORP',
    logo: (
      <div className="flex items-center space-x-2">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="14" stroke="#9CA3AF" strokeWidth="2" fill="none"/>
          <circle cx="16" cy="16" r="8" fill="#9CA3AF"/>
          <circle cx="16" cy="16" r="4" fill="white"/>
        </svg>
        <div className="text-lg font-semibold text-gray-600">INTEGRIO.CORP</div>
      </div>
    )
  },
  {
    id: 4,
    name: 'BRAINBIZ',
    subtitle: 'Digital Agency',
    logo: (
      <div className="flex items-center space-x-3">
        <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="8" width="16" height="16" fill="#9CA3AF" transform="rotate(45 8 16)"/>
          <rect x="20" y="8" width="16" height="16" fill="#9CA3AF" transform="rotate(45 28 16)"/>
        </svg>
        <div>
          <div className="text-lg font-bold text-gray-600">BRAINBIZ</div>
          <div className="text-xs text-gray-400">Digital Agency</div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    name: 'ZAC',
    logo: (
      <div className="text-2xl font-bold text-gray-600 tracking-wider">
        ZAC
      </div>
    )
  }
];

export function Brands() {
  return (
    <section id="brands" className="py-12 lg:py-16 bg-white border-t border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-8 lg:gap-4">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              {brand.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 