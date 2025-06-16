import React, { useEffect, useState } from 'react';
import instance from '../api/api_instance';
import { Link } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = async (page = 1) => {
    try {
      setLoading(true);
      const response = await instance.get(`/test/popular-subject-area?page=${page}`);
      setData(response?.data?.rows?.data || []);
      setTotalPages(response?.data?.rows?.last_page || 1);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSubjectIcon = (subject) => {
    const lowerSubject = subject.toLowerCase();
    const icons = {
      math: '🧮',
      accounting: '📊',
      science: '🔬',
      engineering: '⚙️',
      art: '🎨',
      design: '✏️',
      computer: '💻',
      literature: '📚',
      history: '🏛️',
      architecture: '🏗️',
      astronomy: '🔭',
      agriculture: '🌱',
      animal: '🐾',
      anthropology: '👥',
      archaeology: '⛏️',
      default: '📖'
    };

    if (lowerSubject.includes('math') || lowerSubject.includes('accounting')) return icons.accounting;
    if (lowerSubject.includes('science') || lowerSubject.includes('engineering')) return icons.science;
    if (lowerSubject.includes('art') || lowerSubject.includes('design')) return icons.art;
    if (lowerSubject.includes('computer') || lowerSubject.includes('artificial')) return icons.computer;
    if (lowerSubject.includes('literature')) return icons.literature;
    if (lowerSubject.includes('history')) return icons.history;
    if (lowerSubject.includes('architecture')) return icons.architecture;
    if (lowerSubject.includes('astronomy')) return icons.astronomy;
    if (lowerSubject.includes('agriculture')) return icons.agriculture;
    if (lowerSubject.includes('animal')) return icons.animal;
    if (lowerSubject.includes('anthropology')) return icons.anthropology;
    if (lowerSubject.includes('archaeology')) return icons.archaeology;
    
    return icons.default;
  };

  const getCardTheme = (index) => {
    const themes = [
      {
        bg: 'bg-gradient-to-br from-indigo-100/80 to-purple-100/80',
        accent: 'bg-gradient-to-r from-indigo-500 to-purple-600',
        text: 'text-indigo-600 hover:text-indigo-800',
        pattern: 'bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-purple-400/10 via-transparent to-transparent'
      },
      {
        bg: 'bg-gradient-to-br from-blue-100/80 to-cyan-100/80',
        accent: 'bg-gradient-to-r from-blue-500 to-cyan-600',
        text: 'text-blue-600 hover:text-blue-800',
        pattern: 'bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-blue-400/10 via-transparent to-transparent'
      },
      {
        bg: 'bg-gradient-to-br from-amber-100/80 to-orange-100/80',
        accent: 'bg-gradient-to-r from-amber-500 to-orange-600',
        text: 'text-amber-600 hover:text-amber-800',
        pattern: 'bg-[conic-gradient(from_90deg_at_50%_50%,_var(--tw-gradient-stops))] from-orange-400/10 via-transparent to-transparent'
      },
      {
        bg: 'bg-gradient-to-br from-red-100/80 to-pink-100/80',
        accent: 'bg-gradient-to-r from-red-500 to-pink-600',
        text: 'text-red-600 hover:text-red-800',
        pattern: 'bg-[linear-gradient(45deg,_var(--tw-gradient-stops))] from-pink-400/10 via-transparent to-transparent'
      },
      {
        bg: 'bg-gradient-to-br from-green-100/80 to-teal-100/80',
        accent: 'bg-gradient-to-r from-green-500 to-teal-600',
        text: 'text-green-600 hover:text-green-800',
        pattern: 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-400/10 via-transparent to-transparent'
      },
      {
        bg: 'bg-gradient-to-br from-purple-100/80 to-fuchsia-100/80',
        accent: 'bg-gradient-to-r from-purple-500 to-fuchsia-600',
        text: 'text-purple-600 hover:text-purple-800',
        pattern: 'bg-[linear-gradient(to_right,_var(--tw-gradient-stops))] from-fuchsia-400/10 via-transparent to-transparent'
      }
    ];
    return themes[index % themes.length];
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 uppercase bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Explore Popular Subjects
        </h1>
        <p className="text-lg text-gray-600 ">
          Discover the top subjects chosen by students worldwide. Find your passion and shape your future.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
  {data.map((subject, index) => {
    const theme = getCardTheme(index);
    return (
      <Link 
        to={`/subjects/${subject.id}`} // Add this line to make the whole card clickable
        key={subject.id}
        className="group block " // Add block display to make the link fill the container
      >
        <div 
          className={`relative overflow-hidden rounded-2xl ${theme.bg} p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20`}
        >
          {/* Decorative elements */}
          <div className={`absolute inset-0 ${theme.pattern} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-700"></div>
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-700"></div>
          
          <div className="relative z-10 h-[300px] flex flex-col">
            <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${theme.accent} text-white shadow-lg text-2xl`}>
              {getSubjectIcon(subject.subject_area)}
            </div>
            
            <h2 className="mb-3 text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
              {subject.subject_area}
            </h2>
            
            <p className="text-gray-600 mb-6 flex-grow">
              {subject.overview || 'Explore this fascinating subject area and discover exciting opportunities in this field of study.'}
            </p>
            
            <div className="mt-auto">
              <div className={`inline-flex items-center font-medium ${theme.text} transition-colors group-hover:underline`}>
                Explore topics
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  })}
</div>

      {/* Enhanced Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row justify-between items-center mt-16 gap-4">
          <div className="text-sm text-gray-600">
            Showing page {currentPage} of {totalPages}
          </div>
          
          <nav className="flex items-center gap-1">
           
            
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-md border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 transition-colors"
              aria-label="Previous page"
            >
              Prev
            </button>
            
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }
              
              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`px-4 py-2 rounded-md border ${currentPage === pageNum 
                    ? 'border-blue-500 bg-blue-50 text-blue-600 font-medium' 
                    : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'}`}
                  aria-label={`Page ${pageNum}`}
                >
                  {pageNum}
                </button>
              );
            })}
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-md border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 transition-colors"
              aria-label="Next page"
            >
              Next
            </button>
            
          
          </nav>
        </div>
      )}
    </div>
  );
}

export default Home;