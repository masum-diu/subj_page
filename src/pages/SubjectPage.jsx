import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import instance from '../api/api_instance';
import { motion } from 'framer-motion';

function SubjectPage() {
  const { id } = useParams();
  const [subject, setSubject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedSubjects, setRelatedSubjects] = useState([]);

  const fetchSubjectData = async () => {
    try {
      setLoading(true);
      const subjectResponse = await instance.get(`/subject-area-details?id=${id}`);
      setSubject(subjectResponse.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching subject data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubjectData()
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden container mx-auto"> {/* Added to prevent any potential overflow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 sm:px-6 py-8 max-w-full"
      >
        {/* Breadcrumb Navigation - Fixed overflow */}
        <motion.nav 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex mb-6 overflow-hidden pb-2"
        >
          <ol className="flex items-center space-x-2 text-sm whitespace-nowrap">
            <li>
              <Link to="/" className="text-green-400 hover:underline">
                Home
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li>
              <Link to="/" className="text-green-400 hover:underline">
                Subjects
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-700 font-medium max-w-[120px] truncate">
              {subject.subject_area}
            </li>
          </ol>
        </motion.nav>

        {/* Main Subject Content */}
        <div className="relative">
          {/* Floating decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 md:w-64 md:h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl md:blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 md:w-64 md:h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl md:blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="relative bg-white rounded-xl md:rounded-3xl shadow-lg md:shadow-1xl overflow-hidden mb-8 md:mb-16 z-10"
          >
            <div className="flex flex-col md:flex-row">
              {/* Subject Image/Emoji Section */}
              <div className="w-full md:w-2/5 bg-gradient-to-br from-blue-100 to-indigo-100 p-6 md:p-10 flex flex-col items-center justify-center">
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="text-7xl md:text-9xl mb-4 md:mb-6"
                >
                  {getSubjectEmoji(subject.subject_area)}
                </motion.div>
                <div className="text-center">
                  <span className="inline-block px-3 py-1 md:px-4 md:py-2 rounded-full bg-gray-800 text-green-400 text-sm md:text-base font-medium shadow-md">
                    <span className='text-white'>Subject Area Department :</span> {subject.subject_area_department?.name || 'General'}
                  </span>
                </div>
              </div>
              
              {/* Subject Details Section */}
              <div className="p-6 md:p-10 w-full md:w-3/5">
                <motion.h1 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6"
                >
                  {subject.subject_area}
                </motion.h1>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="prose max-w-none mb-6 md:mb-8 text-gray-700 text-sm md:text-base"
                >
                  {subject.overview ? (
                    <p>{subject.overview}</p>
                  ) : (
                    <p className="italic text-gray-500">No overview available for this subject.</p>
                  )}
                </motion.div>
                
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 mb-6 md:mb-8">
                  <motion.div
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="bg-gradient-to-br from-gray-50 to-white p-4 md:p-6 rounded-lg md:rounded-xl shadow-sm md:shadow-md border border-gray-100"
                  >
                    <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-800 flex items-center">
                      <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                      </svg>
                      Why Choose This?
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      {subject.why_this || 'This subject offers excellent career prospects and intellectual growth opportunities.'}
                    </p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7 }}
                    className="bg-gradient-to-br from-gray-50 to-white p-4 md:p-6 rounded-lg md:rounded-xl shadow-sm md:shadow-md border border-gray-100"
                  >
                    <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-800 flex items-center">
                      <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                      Requirements
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      {subject.requirement || 'No specific requirements. Open to all students with interest in the field.'}
                    </p>
                  </motion.div>
                </div>
                
                {subject.tuition_fee && (
                  <motion.div
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 }}
                    className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 md:p-6 rounded-lg md:rounded-xl shadow-inner border border-blue-100 mb-4 md:mb-6"
                  >
                    <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 text-blue-800">Tuition Fee</h3>
                    <p className="text-xl md:text-2xl font-bold text-blue-600">{subject.tuition_fee}</p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Subjects */}
        {relatedSubjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mb-8 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Explore Related Subjects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {relatedSubjects.map((related, index) => (
                <motion.div
                  key={related.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg md:rounded-2xl shadow-md hover:shadow-lg transition-all"
                >
                  <Link to={`/subjects/${related.id}`} className="block h-full">
                    <div className="p-4 md:p-6 h-full flex flex-col">
                      <div className="text-4xl md:text-5xl mb-3 md:mb-4 text-center">
                        {getSubjectEmoji(related.subject_area)}
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-center mb-2 md:mb-3 text-gray-800">
                        {related.subject_area}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base text-center mb-4 md:mb-6 line-clamp-2">
                        {related.overview || 'Explore this fascinating subject area'}
                      </p>
                      <div className="mt-auto text-center">
                        <span className="inline-flex items-center text-blue-600 font-medium text-sm md:text-base">
                          Learn more
                          <svg className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Back to Subjects Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="text-center"
        >
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium md:font-bold shadow-md md:shadow-lg hover:shadow-xl hover:scale-105 transition-all text-sm md:text-base"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Browse All Subjects
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

const getSubjectEmoji = (subject) => {
  const lowerSubject = subject.toLowerCase();
  const emojis = {
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

  if (lowerSubject.includes('math') || lowerSubject.includes('accounting')) return emojis.accounting;
  if (lowerSubject.includes('science') || lowerSubject.includes('engineering')) return emojis.science;
  if (lowerSubject.includes('art') || lowerSubject.includes('design')) return emojis.art;
  if (lowerSubject.includes('computer') || lowerSubject.includes('artificial')) return emojis.computer;
  if (lowerSubject.includes('literature')) return emojis.literature;
  if (lowerSubject.includes('history')) return emojis.history;
  if (lowerSubject.includes('architecture')) return emojis.architecture;
  if (lowerSubject.includes('astronomy')) return emojis.astronomy;
  if (lowerSubject.includes('agriculture')) return emojis.agriculture;
  if (lowerSubject.includes('animal')) return emojis.animal;
  if (lowerSubject.includes('anthropology')) return emojis.anthropology;
  if (lowerSubject.includes('archaeology')) return emojis.archaeology;
  
  return emojis.default;
};

export default SubjectPage;