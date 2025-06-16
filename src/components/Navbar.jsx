// src/components/Navbar.jsx
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-2xl font-bold hover:text-green-300 transition-colors"
          >
            <span className="text-white">Education</span>
            <span className="text-green-400">Hub</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <NavLink 
                  to="/" 
                  end
                  className={({ isActive }) => 
                    `hover:text-green-300 transition-colors ${
                      isActive ? 'text-green-400 font-semibold' : 'text-white'
                    }`
                  }
                >
                  Popular Subjects
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about"
                  className={({ isActive }) => 
                    `hover:text-green-300 transition-colors ${
                      isActive ? 'text-green-400 font-semibold' : 'text-white'
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              {/* <li>
                <NavLink 
                  to="/packages"
                  className={({ isActive }) => 
                    `hover:text-green-300 transition-colors ${
                      isActive ? 'text-green-400 font-semibold' : 'text-white'
                    }`
                  }
                >
                  Packages
                </NavLink>
              </li> */}
              <li>
                <NavLink 
                  to="/contact"
                  className={({ isActive }) => 
                    `hover:text-green-300 transition-colors ${
                      isActive ? 'text-green-400 font-semibold' : 'text-white'
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="pt-4 pb-2 space-y-3">
            <li>
              <NavLink 
                to="/" 
                end
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'bg-gray-900 text-green-400' : 'text-white hover:bg-gray-700 hover:text-green-300'
                  }`
                }
              >
                Popular Subjects
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'bg-gray-900 text-green-400' : 'text-white hover:bg-gray-700 hover:text-green-300'
                  }`
                }
              >
                About
              </NavLink>
            </li>
            {/* <li>
              <NavLink 
                to="/packages"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'bg-gray-900 text-green-400' : 'text-white hover:bg-gray-700 hover:text-green-300'
                  }`
                }
              >
                Packages
              </NavLink>
            </li> */}
            <li>
              <NavLink 
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'bg-gray-900 text-green-400' : 'text-white hover:bg-gray-700 hover:text-green-300'
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;