const newsArticles = [
  {
    id: 1,
    date: '26',
    month: 'Nov',
    title: 'CURABITUR LOREM UISM QUIS',
    author: 'Admin',
    comments: 15,
    excerpt: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames turpis egestas. Aenean non donec...',
    image: '/news-1.avif',
    category: 'Logistics'
  },
  {
    id: 2,
    date: '22',
    month: 'Nov',
    title: 'CURABITUR LOREM UISM QUIS',
    author: 'Admin',
    comments: 15,
    excerpt: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames turpis egestas. Aenean non donec...',
    image: '/news-2.avif',
    category: 'Transport'
  },
  {
    id: 3,
    date: '20',
    month: 'Nov',
    title: 'CURABITUR LOREM UISM QUIS',
    author: 'Admin',
    comments: 15,
    excerpt: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames turpis egestas. Aenean non donec...',
    image: '/news-3.avif',
    category: 'Aviation'
  },
  {
    id: 4,
    date: '15',
    month: 'Nov',
    title: 'CURABITUR LOREM UISM QUIS',
    author: 'Admin',
    comments: 15,
    excerpt: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames turpis egestas. Aenean non donec...',
    image: '/news-4.avif',
    category: 'Shipping'
  }
];

export function News() {
  return (
    <section id="news" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Latest News
          </h2>
          <div className="flex items-center justify-center">
            <div className="w-3 h-3 bg-yellow-500 mr-2"></div>
            <p className="text-gray-500 text-sm uppercase tracking-wide">
              News from the industry
            </p>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {newsArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group"
            >
              <div className="flex h-full">
                {/* Image Section */}
                <div className="relative w-1/2">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Date Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-gray-800 text-white px-3 py-2 text-center min-w-[50px]">
                      <div className="text-xl font-bold">{article.date}</div>
                      <div className="text-xs uppercase">{article.month}</div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-1/2 p-6 flex flex-col justify-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-yellow-500 transition-colors duration-300">
                    {article.title}
                  </h3>
                  
                  {/* Meta Information */}
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span className="mr-4">{article.author}</span>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 mr-1 text-yellow-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                        />
                      </svg>
                      <span>{article.comments}</span>
                    </div>
                  </div>
                  
                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 