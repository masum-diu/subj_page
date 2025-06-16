// src/components/Footer.jsx
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-green-300 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-green-300 transition-colors">About</Link></li>
              <li><Link to="/packages" className="hover:text-green-300 transition-colors">Packages</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-400">Contact Us</h3>
            <p className="mb-2">Email: info@example.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-400">Follow Us</h3>
            <div className="flex space-x-4">
              <Link to="#" className="hover:text-green-300 transition-colors">Facebook</Link>
              <Link to="#" className="hover:text-green-300 transition-colors">Twitter</Link>
              <Link to="#" className="hover:text-green-300 transition-colors">Instagram</Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;